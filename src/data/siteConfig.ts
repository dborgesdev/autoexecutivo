import { regions } from './regions'
import { whatsappMessages } from './whatsappMessages'

export const siteConfig = {
  brand: 'Auto Executivo',
  domain: 'autoexecutivo.com.br',
  phoneDisplay: '+55 21 96587-8000',
  phoneNormalized: '5521965878000',
  defaultWhatsAppMessage: whatsappMessages.general,
  serviceAreas: regions.flatMap((region) => [...region.cities]),
  // docs/content.md §13: reutilizar title/description literalmente em Open Graph.
  seo: {
    title: 'Auto Executivo | Transporte Executivo e Corporativo',
    description: 'Transporte executivo, corporativo, compartilhado, viagens e encomendas, com atendimento em cidades de SC, PR e SP. Solicite atendimento pelo WhatsApp.',
    locale: 'pt_BR',
  },
} as const
