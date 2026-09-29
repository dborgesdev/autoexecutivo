import type { CSSProperties } from 'react'
import type { services } from '../data/services'
import { ServiceIcon } from './ServiceIcon'
import { WhatsAppLink } from './WhatsAppLink'

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const style = { '--service-card-image': `url("${service.image}")` } as CSSProperties

  return (
    <article className={`service-card service-card--${service.variant}`} style={style}>
      <div className="service-card__scrim" aria-hidden="true" />
      <div className="service-card__content">
        <ServiceIcon name={service.icon} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <WhatsAppLink context={service.whatsappContext} variant="ghost">{service.ctaLabel}</WhatsAppLink>
      </div>
    </article>
  )
}
