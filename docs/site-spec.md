# Auto Executivo — Especificação de Implementação v1

**Status:** pronta para definição do stack e início do desenvolvimento  
**Escopo:** landing page institucional responsiva  
**Conversão principal:** WhatsApp  
**Domínio:** `autoexecutivo.com.br`  
**Stack:** deliberadamente não definido nesta etapa

Esta especificação consolida as decisões tomadas. Não altera briefing, arquitetura, copy ou direção visual.

---

## 1. Objetivo técnico do produto

Construir uma landing page institucional:

- rápida e responsiva;
- orientada à conversão pelo WhatsApp;
- semanticamente correta;
- otimizada para SEO;
- acessível;
- visualmente coerente com a identidade Auto Executivo;
- simples de manter;
- sem backend ou CMS no escopo atual;
- sem sistema de reservas;
- sem checkout;
- sem área do cliente;
- sem simulação de frota própria por meio de imagens genéricas.

O site deverá funcionar integralmente como experiência estática/client-side, exceto pelo redirecionamento externo para WhatsApp.

---

# 2. Arquitetura definitiva

Ordem da página:

1. **Header**
2. **Hero**
3. **Proposta de valor**
4. **Serviços**
5. **Transporte compartilhado**
6. **Transporte corporativo**
7. **Auto Executivo / Qualidade**
8. **Regiões atendidas**
9. **CTA final**
10. **Footer**

A navegação interna utilizará âncoras.

### IDs recomendados

```text
#inicio
#servicos
#compartilhado
#corporativo
#auto-executivo
#regioes
#contato
```

Não criar páginas internas nesta versão.

---

# 3. Design tokens

Os valores abaixo devem ser centralizados em tokens/variáveis, nunca espalhados arbitrariamente pelos componentes.

## Cores

```text
--color-graphite:       #161718
--color-graphite-deep:  #0D0E0F
--color-warm-white:     #F7F5F0
--color-white:          #FFFFFF
--color-gold:           #B89A5A
--color-gold-soft:      #D4C295
--color-text:           #222426
--color-text-muted:     #6E706F
```

Adicionar tokens funcionais derivados:

```text
--color-bg-primary
--color-bg-secondary
--color-bg-dark
--color-text-primary
--color-text-secondary
--color-text-inverse
--color-accent
--color-border
--color-border-dark
```

Não vincular componentes diretamente à cor literal quando um token semântico for apropriado.

### WhatsApp

O verde do WhatsApp não entra na paleta institucional.

Pode ser utilizado exclusivamente em elemento explicitamente associado à plataforma, como ícone flutuante.

---

# 4. Tipografia

Direção aprovada:

**Headings:** Manrope  
**Body/UI:** Inter

A disponibilidade/licenciamento/carregamento será verificada na implementação.

Pesos previstos:

```text
Manrope: 500 / 600
Inter:   400 / 500 / 600
```

Evitar pesos excessivos como 800/900.

### Escala desktop

```text
Display/H1:  clamp(3.5rem, 5vw, 4.5rem)
H2:          clamp(2.5rem, 4vw, 3.25rem)
H3:          1.5–1.875rem
Body Large:  1.125–1.25rem
Body:        1rem–1.0625rem
Small:       0.875rem
Eyebrow:     0.75–0.8125rem
```

### Line-height

```text
Display: 1.05–1.10
Headings: 1.10–1.20
Body: 1.55–1.70
UI: 1.2–1.4
```

Eyebrows podem utilizar `letter-spacing` elevado e uppercase.

Não aplicar tracking exagerado a textos corridos.

---

# 5. Espaçamento

Adotar escala consistente baseada majoritariamente em múltiplos de 4/8.

Sugestão de tokens:

```text
4
8
12
16
24
32
40
48
64
80
96
120
160px
```

### Seções

Desktop:

```text
padding-block padrão: 112–128px
seções de destaque: até 144px
```

Tablet:

```text
80–96px
```

Mobile:

```text
64–72px
```

A implementação poderá utilizar `clamp()` para eliminar saltos desnecessários entre breakpoints.

---

# 6. Container e grid

### Container

```text
max-width: 1280px
margin-inline: auto
```

Padding horizontal aproximado:

```text
Desktop: 32–48px
Tablet:  24–32px
Mobile:  20px
```

### Grid desktop

12 colunas.

Não existe obrigação de manter todos os elementos presos visualmente às 12 colunas; o grid serve como estrutura de alinhamento.

Textos longos devem possuir `max-width` próprio para evitar linhas excessivamente extensas.

Meta para corpo de texto:

**aproximadamente 55–75 caracteres por linha.**

---

# 7. Bordas e superfícies

### Radius

```text
--radius-sm: 6px
--radius-md: 10px
--radius-lg: 14–16px
```

Evitar pills em cards e grandes superfícies.

### Bordas

Predominantemente `1px`, baixo contraste.

### Sombras

Uso mínimo.

Cards não devem parecer flutuantes permanentemente.

Sombra pode surgir discretamente no hover.

Proibidos:

- glow dourado;
- sombras pesadas;
- glassmorphism generalizado;
- gradientes metálicos em componentes comuns.

---

# 8. Botões

Criar componente único reutilizável com variantes.

### Primary Dark

Graphite → branco.

### Primary Light

Branco → graphite.

### Text / Ghost

Sem preenchimento, com seta.

Estados obrigatórios:

```text
default
hover
focus-visible
active
disabled (caso necessário)
```

Altura mínima recomendada:

**48px desktop / 48–52px mobile.**

Área interativa nunca inferior a aproximadamente 44×44px.

A seta `↗` ou ícone equivalente deve deslocar discretamente no hover.

---

# 9. Eyebrow

Componente reutilizável.

Estrutura visual:

```text
—  NOSSOS SERVIÇOS
```

ou pequeno marcador geométrico + texto.

Características:

- uppercase;
- dourado;
- tracking;
- tamanho pequeno;
- contraste acessível.

Não utilizar dourado de baixo contraste sobre fundo claro para textos essenciais.

---

# 10. Elemento gráfico proprietário

Criar um primitive visual baseado na **diagonal do “A” da marca**.

Aplicações permitidas:

- máscara/recorte de imagem;
- detalhe lateral;
- linha divisória;
- elemento de fundo;
- composição do Hero;
- CTA final.

Não transformar o símbolo completo em watermark repetitivo.

O elemento deve ser decorativo e, portanto, ignorado por tecnologias assistivas.

---

# 11. Header

## Desktop

Altura aproximada:

**76–82px**

Estado inicial:

- sobre Hero;
- transparente;
- logo adequado a fundo escuro;
- navegação clara.

Após scroll:

- sticky/fixed;
- Warm White translúcido ou sólido;
- logo em versão escura;
- texto Graphite;
- `backdrop-filter` apenas se não comprometer desempenho;
- borda inferior sutil.

Links:

```text
Início
Serviços
Compartilhado
Corporativo
Regiões
```

CTA:

**Solicitar atendimento**

### Comportamento

Âncoras devem considerar altura do header através de `scroll-margin-top` ou equivalente.

Não implementar scroll spy complexo se não houver benefício.

---

# 12. Header mobile

Exibir:

**logo + botão de menu + acesso ao CTA conforme espaço disponível.**

Menu deve:

- abrir de forma previsível;
- bloquear corretamente interação com conteúdo posterior quando necessário;
- fechar ao selecionar âncora;
- fechar com `Esc` quando aplicável;
- possuir foco gerenciado;
- não causar overflow;
- manter links suficientemente grandes para toque.

Não criar mega-menu.

---

# 13. Hero

## Desktop

Estrutura aproximada:

```text
45% conteúdo
55% imagem
```

Altura visual relevante, mas não obrigatoriamente `100vh`.

Preferência:

```text
min-height: aproximadamente 720–820px
```

considerando header e viewport.

### Conteúdo

Eyebrow:

**TRANSPORTE EXECUTIVO • PARTICULAR E CORPORATIVO**

H1:

**Transporte executivo para você e para sua empresa.**

Texto aprovado:

**Soluções de transporte para passageiros e empresas, com opções para deslocamentos executivos, aeroportos, viagens, transporte compartilhado e encomendas.**

CTA principal:

**Solicitar atendimento**

CTA secundário:

**Conhecer os serviços**

Indicador territorial:

**SC — PR — SP**

### Fotografia

Deve:

- mostrar contexto de mobilidade executiva;
- permitir leitura do texto;
- evitar representação falsa de frota;
- possuir focal point definido;
- funcionar em crop desktop e mobile.

Usar overlay somente quando necessário para contraste.

---

# 14. Proposta de valor

Fundo:

**Warm White**

Layout editorial assimétrico.

Sem card.

Eyebrow:

**AUTO EXECUTIVO**

Título:

**Diferentes necessidades. Um transporte à altura do seu compromisso.**

Texto já aprovado anteriormente.

Assinatura:

**Qualidade em cada atendimento.**

Utilizar espaço negativo como parte da composição.

---

# 15. Serviços

Fundo:

**White**

Componente:

`ServiceCard`

Dados separados da apresentação para evitar markup duplicado.

Cada serviço deve conter:

```text
id
title
description
ctaLabel
whatsappMessage
icon
variant
```

### Hierarquia

Transporte Executivo recebe maior destaque.

Demais:

- Corporativo;
- Compartilhado;
- Viagens;
- Encomendas e Amostras.

Não montar cinco cards visualmente idênticos.

Desktop pode usar composição assimétrica.

Tablet reorganiza para duas colunas quando houver espaço.

Mobile: uma coluna.

---

# 16. Transporte compartilhado

Fundo:

**Graphite**

Imagem + conteúdo.

Imagem preferencialmente à esquerda no desktop.

Conteúdo:

**TRANSPORTE COMPARTILHADO**

**Mesmo trajeto. Valor compartilhado.**

Copy aprovada explicando que a corrida pode ser dividida com mais uma ou duas pessoas.

CTA:

**Consultar transporte compartilhado**

Não implementar neste momento o fluxo de três etapas que dependia de interpretação operacional.

---

# 17. Transporte corporativo

Fundo:

**Warm White**

Layout inverso ao compartilhado.

Conteúdo + imagem contextual B2B.

Não usar imagem de aperto de mãos/reunião genérica.

Mostrar mobilidade corporativa.

CTA:

**Falar sobre transporte corporativo**

Pode existir superfície `Soft Gold` decorativa atrás da imagem.

---

# 18. Qualidade / institucional

Fundo:

**White**

Sem necessidade de fotografia.

Elemento tipográfico **QUALIDADE** em escala grande e baixo contraste pode funcionar como elemento decorativo.

Conteúdo:

**Qualidade como princípio de cada atendimento.**

Manter a copy institucional curta já definida.

Não criar:

- missão;
- visão;
- valores;
- estatísticas;
- anos de mercado;
- depoimentos;

sem conteúdo real fornecido.

---

# 19. Regiões

Fundo:

**Warm White**

Componente reutilizável:

`RegionGroup`

Dados:

```text
SC
Santa Catarina
Florianópolis
Lages

PR
Paraná
Curitiba
Ponta Grossa

SP
São Paulo
São Paulo
São José dos Campos
```

Desktop:

3 colunas.

Mobile:

1 coluna.

Siglas grandes funcionam como elemento visual.

CTA:

**Consultar meu trajeto**

Não implementar mapa.

---

# 20. CTA final

Fundo:

**Graphite**

Conteúdo:

**FALE COM A AUTO EXECUTIVO**

**Tem um trajeto em mente? Consulte seu atendimento.**

Texto já aprovado.

CTA:

**Chamar no WhatsApp**

Telefone visível:

**+55 21 96587-8000**

Pode utilizar detalhe diagonal da marca.

---

# 21. Footer

Fundo:

**Warm White**

Conteúdo:

- logo;
- navegação;
- telefone;
- SC • PR • SP;
- copyright.

Não exibir endereço, e-mail, CNPJ ou redes sociais inexistentes/não fornecidos.

O ano pode ser obtido dinamicamente.

---

# 22. WhatsApp

Centralizar número e mensagens em configuração/dados, evitando URLs hardcoded espalhadas.

Número normalizado:

```text
5521965878000
```

Cada contexto gera sua mensagem específica.

As URLs devem ser corretamente codificadas.

### Mensagens

**Geral**

> Olá! Vim pelo site da Auto Executivo e gostaria de consultar um atendimento.

**Executivo**

> Olá! Gostaria de consultar um transporte executivo.

**Corporativo**

> Olá! Gostaria de informações sobre transporte corporativo para minha empresa.

**Compartilhado**

> Olá! Gostaria de consultar um transporte compartilhado. Meu trajeto é...

**Viagem**

> Olá! Gostaria de consultar uma viagem.

**Encomendas**

> Olá! Gostaria de informações sobre transporte de encomendas/amostras.

Links externos devem seguir comportamento consistente.

---

# 23. WhatsApp flutuante

Desktop e mobile.

Deve permanecer acessível sem cobrir:

- CTAs;
- textos;
- controles;
- footer.

No mobile, considerar `safe-area-inset-bottom`.

O elemento não deve ser excessivamente grande.

`aria-label` descritivo obrigatório.

---

# 24. Assets necessários

## Obrigatórios

### Marca

Precisamos preparar:

- logo principal;
- versão para fundo claro;
- versão para fundo escuro;
- símbolo isolado, se disponível;
- favicon;
- versão adequada para Open Graph quando necessário.

A imagem de referência enviada pelo cliente **não deve simplesmente ser recortada e usada como logo final se estiver rasterizada/baixa resolução**. A implementação precisa partir do melhor arquivo disponível.

### Fotografias

Necessidade mínima:

**01 — Hero**  
Mobilidade executiva / veículo + contexto.

**02 — Transporte compartilhado**  
Preferencialmente contexto de aeroporto/embarque.

**03 — Corporativo**  
Mobilidade corporativa.

Idealmente três imagens principais de alta qualidade são suficientes. Não precisamos encher o site de fotografia.

### Formatos finais

Priorizar:

```text
AVIF
WebP
```

com fallback apenas se tecnicamente necessário.

Dimensões devem corresponder ao tamanho real de renderização.

Não carregar uma imagem 4K indiscriminadamente no mobile.

---

# 25. Tratamento das imagens

Definir:

- `object-fit`;
- `object-position`;
- focal point;
- proporção;
- versão mobile quando crop responsivo não for suficiente.

Sugestões:

Hero:

```text
aprox. 4:5 / composição flexível desktop
```

Seções:

```text
4:3 ou 3:2
```

Não distorcer imagem para caber.

Imagens abaixo da dobra devem utilizar lazy loading.

A imagem crítica do Hero deve receber tratamento de prioridade compatível com a tecnologia escolhida.

---

# 26. Iconografia

Uma única família visual.

Características:

- line icons;
- stroke consistente;
- desenho simples;
- sem preenchimentos complexos.

Ícones decorativos:

```text
aria-hidden="true"
```

Ícones não devem substituir labels essenciais.

---

# 27. Interações

## Navegação

Scroll suave permitido, respeitando:

```text
prefers-reduced-motion
```

## Cards

Desktop:

- pequena elevação;
- alteração sutil de borda;
- deslocamento de seta.

Mobile:

Não depender de hover para revelar informação.

## Botões

Feedback imediato de hover/focus/active.

## Imagens

Parallax é opcional e **não constitui requisito**.

Se implementado:

- desktop apenas;
- amplitude pequena;
- sem layout shift;
- desativado com reduced motion;
- removido se afetar performance.

---

# 28. Motion tokens

```text
--duration-fast:   ~180ms
--duration-normal: ~300ms
--duration-reveal: ~600ms

--ease-standard
--ease-out
```

Reveal:

```text
opacity: 0 → 1
translateY: 16–24px → 0
```

Não atrasar conteúdo crítico esperando animação.

Sem animações obrigatórias para compreender a página.

---

# 29. Breakpoints

Não construir o layout pensando apenas em três screenshots fixos.

Breakpoints devem responder ao conteúdo.

Referência inicial:

```text
Mobile:  < 640px
Tablet:  640–1023px
Desktop: >= 1024px
Wide:    >= 1440px
```

A implementação poderá ajustar pontos específicos quando o conteúdo exigir.

---

# 30. Regras mobile

Obrigatório validar pelo menos:

**320px, 375px, 390px e 430px.**

### Hero

- conteúdo antes da imagem;
- H1 sem palavras isoladas inadequadamente;
- CTAs podem ocupar largura total;
- imagem não deve comprometer primeira dobra.

### Serviços

Uma coluna.

### Compartilhado / Corporativo

Imagem e texto empilhados na ordem narrativa correta.

### Regiões

Uma coluna.

### Header

Nenhum overflow.

### CTA final

Botão de alta visibilidade e toque confortável.

---

# 31. Tablet

Não tratar tablet como desktop estreito.

Verificar especialmente entre:

**768–1024px.**

Grid de serviços e Hero devem reorganizar antes de ficarem comprimidos.

Evitar linhas de headline com 1–2 palavras órfãs.

---

# 32. Acessibilidade

Meta mínima:

**WCAG 2.2 AA nos aspectos aplicáveis ao projeto.**

Obrigatório:

- contraste suficiente;
- navegação por teclado;
- `focus-visible`;
- hierarquia semântica;
- landmarks;
- `alt` adequado;
- ícones decorativos ignorados;
- links com nomes compreensíveis;
- menu mobile acessível;
- tamanho adequado de targets;
- reduced motion;
- idioma `pt-BR`;
- nenhum conteúdo essencial apenas por cor.

A página deve permanecer compreensível sem animações.

---

# 33. Estrutura semântica

Esperado:

```text
header
nav
main
  section
  section
  ...
footer
```

Um único:

```text
<h1>
```

H2 para seções principais.

H3 para cards/subconteúdo quando semanticamente correto.

Não selecionar heading pelo tamanho visual.

---

# 34. SEO técnico

## Title

Base aprovada:

**Auto Executivo | Transporte Executivo e Corporativo**

Reavaliar comprimento no build final.

## Meta description

Base:

**Transporte executivo, corporativo, compartilhado, viagens e encomendas, com atendimento em cidades de SC, PR e SP. Solicite atendimento pelo WhatsApp.**

## Canonical

Canonical absoluto apontando para a URL oficial.

## Open Graph

Implementar:

```text
og:title
og:description
og:url
og:type
og:image
og:locale
```

## Twitter/X metadata

Adicionar metadados equivalentes quando apropriado.

## Robots

Página indexável em produção.

Ambientes de preview/staging não devem ser indexados quando a infraestrutura permitir controle adequado.

## Sitemap

Incluir página canônica.

Mesmo sendo site one-page, sitemap válido deve existir.

---

# 35. Dados estruturados

Implementar JSON-LD somente com informações verificadas.

Podemos representar:

- nome;
- URL;
- telefone;
- áreas atendidas;
- serviços.

**Não inserir endereço físico inexistente/não confirmado.**

Não criar avaliações, estrelas, faixa de preço ou horário de funcionamento.

O tipo Schema.org exato deverá ser escolhido durante a implementação após verificar qual entidade descreve corretamente a operação; não vamos forçar um subtipo inadequado apenas para “ter schema”.

---

# 36. SEO geográfico

As cidades devem existir como **conteúdo HTML real**, não apenas em elementos gráficos.

Cobertura confirmada:

- Florianópolis;
- Lages;
- Curitiba;
- Ponta Grossa;
- São José dos Campos;
- São Paulo.

Não criar páginas programáticas por cidade nesta versão.

Não afirmar atendimento integral aos três estados.

A comunicação correta continua sendo:

**atendimento em cidades de SC, PR e SP.**

---

# 37. Performance

Metas de produção, medidas em condições adequadas:

### Core Web Vitals

```text
LCP ≤ 2.5s
CLS ≤ 0.1
INP ≤ 200ms
```

### Lighthouse

Meta indicativa em produção:

```text
Performance:    ≥ 90
Accessibility:  ≥ 95
Best Practices: ≥ 95
SEO:            ≥ 95
```

Esses números são **critérios de QA**, não motivo para manipular auditorias.

Prioridades:

- otimização da imagem Hero;
- fonts eficientes;
- mínimo JavaScript desnecessário;
- dimensões explícitas de mídia;
- lazy loading;
- evitar dependências grandes para pequenas animações.

---

# 38. Analytics

Não foi solicitado.

Portanto:

**não integrar automaticamente GA4, Meta Pixel, GTM ou ferramentas de tracking.**

A arquitetura pode permitir inclusão posterior sem refatoração relevante.

Também não devemos adicionar banner de cookies sem existir tecnologia que efetivamente exija tratamento correspondente.

---

# 39. Componentização conceitual

Independentemente do stack futuro, a arquitetura deve favorecer equivalentes a:

```text
Header
MobileMenu
Container
Section
Eyebrow
Button
WhatsAppLink
ServiceCard
RegionGroup
ResponsiveImage
BrandDiagonal
FinalCTA
Footer
```

E blocos de página:

```text
HeroSection
ValueSection
ServicesSection
SharedTransportSection
CorporateSection
QualitySection
RegionsSection
```

Não criar abstrações para elementos usados uma única vez sem ganho real.

---

# 40. Dados separados da UI

Conteúdo repetível deve preferencialmente ser estruturado como dados:

```text
services
regions
navigation
whatsappMessages
siteConfig
```

`siteConfig` deve concentrar pelo menos:

```text
brand
domain
phoneDisplay
phoneNormalized
defaultWhatsAppMessage
serviceAreas
```

Isso reduz manutenção futura.

---

# 41. Estados e erros

Como não há formulário, API ou backend, a superfície de erro é pequena.

Mesmo assim:

- links precisam ser válidos;
- imagens devem possuir fallback visual razoável;
- menu deve funcionar sem depender de animação;
- conteúdo principal deve permanecer acessível mesmo se JS não for necessário ou falhar, conforme capacidades do stack escolhido.

---

# 42. Segurança e privacidade

Não coletaremos dados diretamente no site.

O WhatsApp é serviço externo e o usuário deliberadamente seguirá para ele.

Evitar:

- scripts terceiros desnecessários;
- trackers não aprovados;
- embeds pesados;
- widgets externos de WhatsApp quando um simples link cumprir a função.

O botão de WhatsApp deve ser nosso componente, não plugin externo.

---

# 43. Critérios objetivos de aceite — conteúdo

O projeto somente pode ser considerado pronto quando:

- todos os cinco serviços estiverem representados;
- compartilhado estiver corretamente explicado;
- corporativo estiver identificado como solução para empresas;
- encomendas/amostras estiverem contempladas;
- as seis cidades confirmadas estiverem corretas;
- nenhuma área de atendimento não confirmada tiver sido adicionada;
- telefone estiver correto;
- nenhuma característica comercial inventada tiver sido introduzida;
- não houver veículos apresentados como frota real sem evidência.

---

# 44. Critérios de aceite — visual

Deve existir:

- alternância clara entre superfícies claras e escuras;
- predominância geral de áreas claras;
- Hero de alto impacto;
- máximo controle no uso do dourado;
- linguagem fotográfica de mobilidade, não concessionária;
- elemento diagonal derivado da marca;
- hierarquia tipográfica consistente;
- ausência de estética genérica de template;
- ausência de excesso de preto/dourado;
- ausência de glow e efeitos “luxury” artificiais.

---

# 45. Critérios de aceite — UX

Todos os seguintes fluxos precisam funcionar:

**Hero → WhatsApp**

**Serviço → WhatsApp contextual**

**Compartilhado → WhatsApp contextual**

**Corporativo → WhatsApp contextual**

**Região → consulta pelo WhatsApp**

**CTA final → WhatsApp**

Além disso:

- navegação por âncoras correta;
- header não cobre títulos;
- menu mobile funcional;
- nenhum CTA fica oculto pelo botão flutuante;
- nenhuma interação depende exclusivamente de hover.

---

# 46. Critérios de aceite — responsividade

Validar visualmente:

```text
320
375
390
430
768
1024
1280
1440+
```

Sem:

- overflow horizontal;
- texto cortado;
- imagens deformadas;
- menus quebrados;
- CTAs fora da viewport;
- grids comprimidos;
- espaçamentos desproporcionais;
- conteúdo sobreposto.

---

# 47. Critérios de aceite — técnico

Antes da entrega:

- instalar dependências com sucesso;
- executar lint, se configurado;
- executar typecheck, se aplicável;
- executar build de produção;
- nenhum erro de build;
- nenhum erro relevante no console;
- nenhum link interno quebrado;
- links do WhatsApp testados;
- metadata verificada;
- favicon verificado;
- canonical correto;
- sitemap/robots válidos;
- imagens otimizadas;
- auditoria Lighthouse;
- teste desktop/mobile real ou em viewport equivalente.

Nenhuma validação deve ser declarada concluída sem ter sido executada.

---

# 48. Assets a produzir antes/durante a implementação

Temos quatro entregáveis visuais essenciais:

**1. Logo preparado para web**  
Versões clara/escura e favicon.

**2. Hero**  
Imagem principal com composição adequada ao recorte diagonal e responsividade.

**3. Transporte compartilhado**  
Imagem relacionada a deslocamento/aeroporto.

**4. Transporte corporativo**  
Imagem relacionada à mobilidade empresarial.

A produção desses assets pode ocorrer paralelamente ao desenvolvimento da estrutura, desde que seus aspect ratios e focal points sejam respeitados desde o início.

---

# 49. Fora do escopo desta versão

Não implementar:

- painel administrativo;
- WordPress/CMS;
- formulário próprio;
- sistema de reservas;
- cálculo de corrida;
- pagamento;
- login;
- área do cliente;
- mapa interativo;
- blog;
- páginas individuais por cidade;
- página individual por serviço;
- integração com frota;
- depoimentos fictícios;
- avaliações;
- chatbot;
- multilíngue.

Isso evita expansão silenciosa de escopo.

---

# 50. Pendências que bloqueiam o desenvolvimento

**Nenhuma informação comercial restante impede o início do desenvolvimento.**

Horários, histórico da empresa, endereço, CNPJ, redes sociais e outros dados podem ser incorporados posteriormente caso Roberto os forneça, mas não são necessários para a versão especificada.

Há apenas **uma dependência operacional antes da implementação visual definitiva: obter/preparar os arquivos da identidade visual em qualidade adequada**. Se a única fonte disponível for a imagem rasterizada enviada pelo cliente, precisaremos avaliar sua resolução e preparar as versões necessárias para web.

As fotografias também precisam ser produzidas/selecionadas, mas **não bloqueiam o início estrutural do desenvolvimento**, porque sua finalidade, composição, quantidade e comportamento já estão especificados.

Com isso, a **especificação funcional, visual, responsiva, de conteúdo, conversão e SEO está suficientemente fechada**. A próxima decisão do processo é exclusivamente técnica: **definir o stack mais adequado para esta landing page e, depois, preparar o repositório para implementação.**