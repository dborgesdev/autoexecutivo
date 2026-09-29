import { whatsappMessages } from './whatsappMessages'

// Copy literal de docs/content.md §5; ícones lineares locais, sem biblioteca.
export const services = [
  {
    id: 'executivo', title: 'Transporte Executivo',
    description: 'Transporte para deslocamentos particulares, compromissos e outras necessidades mediante solicitação.',
    ctaLabel: 'Solicitar transporte', whatsappMessage: whatsappMessages.executive, whatsappContext: 'executive',
    icon: 'car', variant: 'featured',
  },
  {
    id: 'corporativo', title: 'Transporte Corporativo',
    description: 'Soluções de transporte para empresas, com possibilidade de contratação de acordo com a necessidade da operação.',
    ctaLabel: 'Atendimento corporativo', whatsappMessage: whatsappMessages.corporate, whatsappContext: 'corporate',
    icon: 'briefcase', variant: 'standard',
  },
  {
    id: 'compartilhado', title: 'Transporte Compartilhado',
    description: 'Uma opção para dividir o trajeto e o valor da corrida com outros passageiros, mediante agendamento.',
    ctaLabel: 'Consultar compartilhado', whatsappMessage: whatsappMessages.shared, whatsappContext: 'shared',
    icon: 'people', variant: 'standard',
  },
  {
    id: 'viagens', title: 'Viagens',
    description: 'Transporte de passageiros para viagens mediante consulta e agendamento.',
    ctaLabel: 'Consultar viagem', whatsappMessage: whatsappMessages.travel, whatsappContext: 'travel',
    icon: 'route', variant: 'standard',
  },
  {
    id: 'encomendas', title: 'Encomendas e Amostras',
    description: 'Transporte de encomendas e amostras para clientes e empresas, mediante solicitação.',
    ctaLabel: 'Consultar entrega', whatsappMessage: whatsappMessages.deliveries, whatsappContext: 'deliveries',
    icon: 'package', variant: 'standard',
  },
] as const
