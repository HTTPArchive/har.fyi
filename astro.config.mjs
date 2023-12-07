import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://har.fyi',
  integrations: [
    starlight({
      title: 'har.fyi 🧪',
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-SK2FZXB50K'
          }
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-SK2FZXB50K');`
        }
      ],
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
            { label: 'Minimizing query costs', link: '/guides/minimizing-costs/' },
            { label: 'Release cycle', link: '/guides/release-cycle/' },
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
        {
          label: 'Custom Metrics',
          autogenerate: { directory: 'reference/custom-metrics' }
        },
        {
          label: 'Functions',
          autogenerate: { directory: 'reference/functions' }
        },
      ],
    }),
  ],
});
