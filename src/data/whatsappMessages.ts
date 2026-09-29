// docs/content.md §12: "Consultar meu trajeto" usa o contexto general
// enquanto não houver mensagem específica aprovada para regiões.
export const whatsappMessages = {
  general: 'Olá! Vim pelo site da Auto Executivo e gostaria de consultar um atendimento.',
  executive: 'Olá! Gostaria de consultar um transporte executivo.',
  corporate: 'Olá! Gostaria de informações sobre transporte corporativo para minha empresa.',
  shared: 'Olá! Gostaria de consultar um transporte compartilhado. Meu trajeto é...',
  travel: 'Olá! Gostaria de consultar uma viagem.',
  deliveries: 'Olá! Gostaria de informações sobre transporte de encomendas/amostras.',
} as const

export type WhatsAppContext = keyof typeof whatsappMessages
