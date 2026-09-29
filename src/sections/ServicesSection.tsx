import { pageContent } from '../data/pageContent'
import { services } from '../data/services'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'
import { ServiceCard } from '../components/ServiceCard'

export function ServicesSection() {
  const content = pageContent.services
  return (
    <Section id="servicos" labelledBy="services-title">
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <div className="section-intro"><h2 id="services-title">{content.heading}</h2><p>{content.text}</p></div>
      <div className="services-grid">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
    </Section>
  )
}
