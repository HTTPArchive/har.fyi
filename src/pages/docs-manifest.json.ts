import { getCollection } from 'astro:content';

export async function GET() {
  const docs = await getCollection('docs');

  const manifest = docs.map((doc) => ({
    id: doc.id,
    slug: doc.id.replace(/\.mdx?$/, ''),
    body: doc.body,
    title: doc.data.title,
  }));

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
