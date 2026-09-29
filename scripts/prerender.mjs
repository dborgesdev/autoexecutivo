import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'

// Um único documento estático; sem servidor de produção ou sistema de rotas.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const html = await readFile('dist/index.html', 'utf8')
  const marker = '<div id="root"></div>'
  if (!html.includes(marker)) throw new Error('Ponto de pré-renderização não encontrado.')
  await writeFile('dist/index.html', html.replace(marker, () => `<div id="root">${renderToString(createElement(App))}</div>`))
  console.log('Pré-renderização concluída: dist/index.html')
} finally {
  await server.close()
}
