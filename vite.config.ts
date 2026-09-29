import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { siteConfig } from './src/data/siteConfig'
import { canonicalUrl, structuredData } from './src/data/seo'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-metadata',
      transformIndexHtml() {
        return [
          { tag: 'title', children: siteConfig.seo.title, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'description', content: siteConfig.seo.description }, injectTo: 'head' },
          { tag: 'link', attrs: { rel: 'canonical', href: canonicalUrl }, injectTo: 'head' },
          ...Object.entries({
            'og:title': siteConfig.seo.title,
            'og:description': siteConfig.seo.description,
            'og:url': canonicalUrl,
            'og:type': 'website',
            'og:locale': siteConfig.seo.locale,
          }).map(([property, content]) => ({ tag: 'meta', attrs: { property, content }, injectTo: 'head' as const })),
          { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(structuredData).replace(/</g, '\\u003c'), injectTo: 'head' },
        ]
      },
      generateBundle() {
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: 'User-agent: *\nDisallow: /\n' })
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonicalUrl}</loc></url></urlset>\n` })
      },
    },
  ],
})
