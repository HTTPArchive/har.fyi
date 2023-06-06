import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://har.fyi',
  integrations: [
    starlight({
      title: 'har.fyi 🧪',
      social: {
        github: 'https://github.com/rviscomi/har.fyi',
        twitter: 'https://twitter.com/HTTPArchive',
      },
      editLink: {
        baseUrl: 'https://github.com/rviscomi/har.fyi/edit/main/'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Getting started', link: '/guides/getting-started/' },
          ],
        },
        {
          label: 'Tables',
          autogenerate: { directory: 'reference/tables' }
        },
        {
          label: 'Structs',
          autogenerate: { directory: 'reference/structs' }
        },
        {
          label: 'Blobs',
          autogenerate: { directory: 'reference/blobs' }
        },
      ],
    }),
  ],
});
