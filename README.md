# Auto Executivo

Landing page React + TypeScript + Vite. Requisitos: Node.js 22.13+ na linha 22, ou 24+, e npm.

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

O build executa typecheck, Vite e pré-renderização com React. `dist/` contém a saída
estática completa, com texto e links disponíveis mesmo sem JavaScript. O navegador
hidrata esse HTML para ativar o menu mobile e os comportamentos de scroll.
Siga [AGENTS.md](AGENTS.md), [docs/content.md](docs/content.md) para conteúdo textual
e [docs/site-spec.md](docs/site-spec.md) para requisitos visuais e técnicos.
A precedência textual está em `docs/content.md` §17; preserve as copies literalmente.

`src/data` centraliza configuração, navegação, serviços, regiões e mensagens.
`src/utils/whatsapp.ts` gera URLs por contexto com número validado e mensagem codificada.
`src/data/pageContent.ts` transcreve as copies das seções. `src/styles` concentra tokens,
fontes locais e estilos responsivos; `components` e `sections` compõem a página.
Nenhuma dependência de runtime foi adicionada além das já existentes.

## Assets e decisões de implementação

- A marca é representada apenas pelo texto Auto Executivo.
- `MediaPlaceholder` reserva os três blocos de imagem, com rótulo técnico visível e
  `aria-hidden`. Substituir por `picture/img` otimizado, com dimensões, alt, crops e focal
  points aprovados; Hero prioritário e imagens inferiores com lazy loading.
- O traço diagonal é provisório: seu ângulo precisa ser ajustado à marca real.
- Manrope (500/600) e Inter (400/500/600) usam WOFF2 variável latino, preload e font-display
  swap. Arquivos obtidos no CDN Fontsource; licenças OFL do repositório Google Fonts
  preservadas em `src/assets/fonts`. Não há requisições externas de fontes no site.
- Ícones lineares em SVG local, sem biblioteca; decorativos e ignorados por leitores de tela.
- Menu usa `dialog.showModal()` (foco contido e fundo inerte), Esc nativo, restauração
  de foco e fechamento ao navegar. Abaixo de 1200px a navegação recolhe para evitar compressão.
- WhatsApp abre na mesma aba. O flutuante respeita a safe area e se oculta ao cruzar texto,
  links ou o footer; os CTAs das seções permanecem disponíveis.
- Labels operacionais de acessibilidade e rótulos dos placeholders são técnicos;
  nenhuma copy comercial foi criada. O indicador territorial do Hero preserva `---`
  literalmente como está em `docs/content.md`.

## Antes da conclusão visual e publicação

- Obter/preparar logos, favicon, imagem OG e três fotografias aprovadas.
- O conteúdo aprovado está materializado em `docs/content.md`, inclusive os textos antes
  referenciados indiretamente pela especificação. Não é necessário acessar o histórico da conversa.
- A redação exata do copyright continua pendente. A mensagem específica de regiões e as copies
  próprias de Open Graph também não foram definidas, mas têm fallbacks aprovados: mensagem Geral
  e reutilização literal do title/meta description, respectivamente. Dados empresariais adicionais
  (endereço, CNPJ, e-mail, horários e redes sociais) devem permanecer ausentes.
- Revalidar crops, contraste, responsividade e performance com os assets finais.
- A metadata e o JSON-LD são gerados no HTML pelo Vite a partir dos dados centrais.
  O schema usa [Organization](https://schema.org/Organization) e [Service](https://schema.org/Service),
  somente com nome, URL, telefone, cidades e serviços verificados. `og:image` e favicon estão pendentes.
- Desenvolvimento e build permanecem com `noindex, nofollow`; o build também gera
  `robots.txt` com `Disallow: /` e sitemap com a URL canônica. Na publicação final, alterar
  conscientemente essa política em `index.html` e `vite.config.ts`, liberando apenas produção.
  A simples execução de `npm run build` não libera indexação.

Não há analytics, backend, formulário ou fotografias de exemplo.
