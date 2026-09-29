import { whatsappMessages } from './whatsappMessages'

// Copy literal de docs/content.md §5. Ícones aguardam definição visual (site-spec.md §26).
export const services = [
  {
    id: 'executivo', title: 'Transporte Executivo',
    description: 'Transporte para deslocamentos particulares, compromissos e outras necessidades mediante solicitação.',
    ctaLabel: 'Solicitar transporte', whatsappMessage: whatsappMessages.executive,
    icon: null, variant: 'featured',
  },
  {
    id: 'corporativo', title: 'Transporte Corporativo',
    description: 'Soluções de transporte para empresas, com possibilidade de contratação de acordo com a necessidade da operação.',
    ctaLabel: 'Atendimento corporativo', whatsappMessage: whatsappMessages.corporate,
    icon: null, variant: 'standard',
  },
  {
    id: 'compartilhado', title: 'Transporte Compartilhado',
    description: 'Uma opção para dividir o trajeto e o valor da corrida com outros passageiros, mediante agendamento.',
    ctaLabel: 'Consultar compartilhado', whatsappMessage: whatsappMessages.shared,
    icon: null, variant: 'standard',
  },
  {
    id: 'viagens', title: 'Viagens',
    description: 'Transporte de passageiros para viagens mediante consulta e agendamento.',
    ctaLabel: 'Consultar viagem', whatsappMessage: whatsappMessages.travel,
    icon: null, variant: 'standard',
  },
  {
    id: 'encomendas', title: 'Encomendas e Amostras',
    description: 'Transporte de encomendas e amostras para clientes e empresas, mediante solicitação.',
    ctaLabel: 'Consultar entrega', whatsappMessage: whatsappMessages.deliveries,
    icon: null, variant: 'standard',
  },
] as const
