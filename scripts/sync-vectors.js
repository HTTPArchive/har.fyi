const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Firestore, FieldValue } = require('@google-cloud/firestore');
const { VertexAI } = require('@google-cloud/vertexai');

// --- Configuration Constants ---
const GCP_PROJECT_ID = 'httparchive';
const GCP_REGION = 'us-central1';
const FIRESTORE_DB_NAME = '(default)';
const FIRESTORE_COLLECTION_NAME = 'doc_embeddings';
const BASE_WEBSITE_URL = 'https://har.fyi';

const MANIFEST_PATH = path.join(__dirname, '../dist/docs-manifest.json');
const EMBEDDING_MODEL = 'text-embedding-005';

// --- Initialization ---
const firestore = new Firestore({
  projectId: GCP_PROJECT_ID,
  databaseId: FIRESTORE_DB_NAME
});
const vertexAI = new VertexAI({ project: GCP_PROJECT_ID, location: GCP_REGION });

/**
 * Extremely basic chunking by headers.
 * Splits by sequences like '## ' or '### '.
 */
function chunkMarkdown(content) {
  // A robust script might use an AST-based parser, this is a basic Regex split
  // finding H2 and H3 boundaries.
  const regex = /(?=\n#{2,3}\s)/;
  const rawChunks = content.split(regex);

  return rawChunks.map(chunk => chunk.trim()).filter(chunk => chunk.length > 0);
}

/**
 * Get embedding for a text chunk using Vertex AI.
 */
async function getEmbedding(text) {
  const embeddingModel = vertexAI.getGenerativeModel({ model: EMBEDDING_MODEL });

  try {
    const request = {
       content: { parts: [{ text: text }] },
       taskType: 'RETRIEVAL_DOCUMENT'
    };

    const response = await embeddingModel.embedContent(request);
    return response.embeddings[0].values;
  } catch (error) {
    throw new Error(`Embedding generation failed: ${error}`);
  }
}

/**
 * Main Sync Workflow
 */
async function syncVectors() {
  console.log('Starting sync process...');

  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error(`Error: Could not find manifest at ${MANIFEST_PATH}.`);
    console.error('Please run `npm run build` or `astro build` before running this script.');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  console.log(`Found ${manifest.length} documentation pages in the manifest.`);

  // Record the timestamp for this sync run
  const currentSyncTime = Date.now();
  let processedCount = 0;

  for (const doc of manifest) {
    console.log(`Processing ${doc.slug || 'index'}...`);

    // Construct exact deterministic URL. Astro exposes the final slug natively.
    const urlPath = doc.slug === '' || doc.slug === 'index' ? '' : `${doc.slug}/`;
    const url = `${BASE_WEBSITE_URL}/${urlPath}`;

    const chunks = chunkMarkdown(doc.body);

    for (let i = 0; i < chunks.length; i++) {
        const chunkText = chunks[i];

        // Hash the FULL chunk text. If a single word changes, it gets a new ID.
        // If it's identical, it overwrites idempotently.
        const hashPayload = `${url}-chunk-${i}-${chunkText}`;
        const documentId = crypto.createHash('sha256').update(hashPayload).digest('hex');

        console.log(`\tChunk ${i} ID: ${documentId} - URL: ${url}`);

        try {
          const docRef = firestore.collection(FIRESTORE_COLLECTION_NAME).doc(documentId);
          const existingDoc = await docRef.get();

          if (existingDoc.exists) {
            console.log(`\t\tChunk ${documentId} already exists. Updating syncTime only.`);
            // If the document already exists, we know the text and embedding are identical
            // (because the ID is a hash of the content). So we just "touch" it with the new syncTime.
            await docRef.update({ syncTime: currentSyncTime });
          } else {
            console.log(`\t\tNew chunk ${documentId}. Generating embedding...`);
            // Generate embedding for the chunk only if it doesn't exist
            const embedding = await getEmbedding(chunkText);

            await docRef.set({
               url,
               content: chunkText,
               syncTime: currentSyncTime,
               // frontmatter: frontmatter,
               embedding: FieldValue.vector(embedding)
            });
          }

          processedCount++;
        } catch(e) {
            console.error(`\tFailed resolving chunk ${documentId}:`, e);
        }
    }
  }

  console.log(`Finished synchronizing. Upserted ${processedCount} chunks to Firestore.`);

  // --- Stale Document Cleanup ---
  const staleDocsSnapshot = await firestore.collection(FIRESTORE_COLLECTION_NAME)
    .where('syncTime', '<', currentSyncTime)
    .get();

  let deletedCount = 0;
  // Firestore batches support up to 500 operations
  let batch = firestore.batch();
  let batchCount = 0;

  for (const doc of staleDocsSnapshot.docs) {
    batch.delete(doc.ref);
    batchCount++;
    deletedCount++;

    if (batchCount === 500) {
      await batch.commit();
      batch = firestore.batch();
      batchCount = 0;
    }
  }

  if (batchCount > 0) {
    await batch.commit();
  }
  console.log(`Cleanup complete. Deleted ${deletedCount} stale chunks.`);
}

syncVectors().catch(console.error);
