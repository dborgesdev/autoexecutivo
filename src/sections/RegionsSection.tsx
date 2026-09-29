import { pageContent } from '../data/pageContent'
import { regions } from '../data/regions'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'
import { RegionGroup } from '../components/RegionGroup'
import { WhatsAppLink } from '../components/WhatsAppLink'

export function RegionsSection() {
  const content = pageContent.regions
  return (
    <Section id="regioes" labelledBy="regions-title" tone="warm">
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <div className="section-intro"><h2 id="regions-title">{content.heading}</h2><p>{content.text}</p></div>
      <div className="regions-grid">{regions.map((region) => <RegionGroup key={region.id} region={region} />)}</div>
      <WhatsAppLink>{content.cta}</WhatsAppLink>
    </Section>
  )
}
