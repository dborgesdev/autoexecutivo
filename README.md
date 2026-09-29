# Auto Executivo

Fundação React + TypeScript + Vite. Requisitos: Node.js 22.13+ na linha 22, ou 24+, e npm.

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

O build também executa o typecheck; `dist/` contém a saída estática.
Siga [AGENTS.md](AGENTS.md), [docs/content.md](docs/content.md) para conteúdo textual
e [docs/site-spec.md](docs/site-spec.md) para requisitos visuais e técnicos.
A precedência textual está em `docs/content.md` §17; preserve as copies literalmente.

`src/data` centraliza configuração, navegação, serviços, regiões e mensagens.
`src/utils/whatsapp.ts` gera URLs por contexto com número validado e mensagem codificada.
`src/styles` concentra tokens e base global. `components`, `sections` e `assets`
estão reservados com `.gitkeep`, sem componentes ou imagens provisórios.

## Antes da implementação visual e publicação

- Obter/preparar logos, favicon, imagem OG e três fotografias aprovadas.
- Verificar licença e preparar carregamento de Manrope/Inter; por ora há fallback de sistema.
- O conteúdo aprovado está materializado em `docs/content.md`, inclusive os textos antes
  referenciados indiretamente pela especificação. Não é necessário acessar o histórico da conversa.
- A redação exata do copyright continua pendente. A mensagem específica de regiões e as copies
  próprias de Open Graph também não foram definidas, mas têm fallbacks aprovados: mensagem Geral
  e reutilização literal do title/meta description, respectivamente. Dados empresariais adicionais
  (endereço, CNPJ, e-mail, horários e redes sociais) devem permanecer ausentes.
- Nos dados de serviços, apenas `icon` permanece `null`, aguardando definição da família visual.
- Aplicar os tokens aos componentes e validar responsividade/acessibilidade na etapa visual.
- Completar canonical, metadata, robots, sitemap e JSON-LD verificado na etapa de SEO.
  O shell tem `noindex, nofollow` deliberadamente; substituir por política adequada por ambiente
  antes de publicar a página final. O título aprovado já está no HTML.

Nenhuma seção definitiva, analytics ou asset de exemplo foi implementado.
