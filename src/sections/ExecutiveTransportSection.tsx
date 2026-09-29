import { pageContent } from '../data/pageContent'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'
import { WhatsAppLink } from '../components/WhatsAppLink'
import executiveTransportImage from '../assets/executive-transport.webp'

export function ExecutiveTransportSection() {
  const content = pageContent.executive

  return (
    <Section id="executivo" labelledBy="executive-title" tone="dark" className="executive-section">
      <div className="split-grid split-grid--media-first">
        <div className="split-copy">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 id="executive-title">{content.heading}</h2>
          <p>{content.text}</p>
          <WhatsAppLink context="executive" variant="light">{content.cta}</WhatsAppLink>
        </div>
        <div className="section-media">
          <img src={executiveTransportImage} alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    </Section>
  )
}
