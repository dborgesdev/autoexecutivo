import type { services } from '../data/services'
import { ServiceIcon } from './ServiceIcon'
import { WhatsAppLink } from './WhatsAppLink'

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className={`service-card service-card--${service.variant}`}>
      <ServiceIcon name={service.icon} />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <WhatsAppLink context={service.whatsappContext} variant="ghost">{service.ctaLabel}</WhatsAppLink>
    </article>
  )
}
