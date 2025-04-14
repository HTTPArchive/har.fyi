import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://har.fyi',
  integrations: [
    starlight({
      title: 'har.fyi',
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
      social: [
        {icon: "github", label: 'GitHub', href: 'https://github.com/HTTPArchive/har.fyi' },
        {icon: "x.com", label: 'x.com', href: 'https://x.com/HTTPArchive' },
        {icon: "blueSky", label: 'BlueSky', href: 'https://bsky.app/profile/httparchive.org' },
      ],
      editLink: {
        baseUrl: 'https://github.com/HTTPArchive/har.fyi/edit/main/'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Getting started', link: '/guides/getting-started/' },
            { label: 'Minimizing query costs', link: '/guides/minimizing-costs/' },
            { label: 'Guided tour', link: '/guides/guided-tour/' },
            { label: 'Release cycle', link: '/guides/release-cycle/' },
            { label: 'Migrate queries to `crawl` dataset', link: '/guides/migrating-to-crawl-dataset/' },
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
