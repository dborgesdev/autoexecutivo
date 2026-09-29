import { pageContent } from '../data/pageContent'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'
import { WhatsAppLink } from '../components/WhatsAppLink'
import corporateImage from '../assets/corporate.webp'

export function CorporateSection() {
  const content = pageContent.corporate
  return (
    <Section id="corporativo" labelledBy="corporate-title" tone="warm">
      <div className="split-grid">
        <div className="split-copy"><Eyebrow>{content.eyebrow}</Eyebrow><h2 id="corporate-title">{content.heading}</h2><p>{content.text}</p><WhatsAppLink context="corporate">{content.cta}</WhatsAppLink></div>
        <div className="corporate-media section-media">
          <img src={corporateImage} alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    </Section>
  )
}
