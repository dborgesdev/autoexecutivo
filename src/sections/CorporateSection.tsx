import { pageContent } from '../data/pageContent'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { MediaPlaceholder } from '../components/MediaPlaceholder'

export function CorporateSection() {
  const content = pageContent.corporate
  return (
    <Section id="corporativo" labelledBy="corporate-title" tone="warm">
      <div className="split-grid">
        <div className="split-copy"><Eyebrow>{content.eyebrow}</Eyebrow><h2 id="corporate-title">{content.heading}</h2><p>{content.text}</p><WhatsAppLink context="corporate">{content.cta}</WhatsAppLink></div>
        <div className="corporate-media"><MediaPlaceholder slot="corporate" /></div>
      </div>
    </Section>
  )
}
