import { pageContent } from '../data/pageContent'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'
import { WhatsAppLink } from '../components/WhatsAppLink'
import sharedTransportImage from '../assets/shared-transport.webp'

export function SharedTransportSection() {
  const content = pageContent.shared
  return (
    <Section id="compartilhado" labelledBy="shared-title" tone="dark" className="shared-section">
      <div className="split-grid split-grid--media-first">
        <div className="split-copy"><Eyebrow>{content.eyebrow}</Eyebrow><h2 id="shared-title">{content.heading}</h2><div className="prose">{content.paragraphs.map((text) => <p key={text}>{text}</p>)}</div><WhatsAppLink context="shared" variant="light">{content.cta}</WhatsAppLink></div>
        <div className="section-media dark-media-accent">
          <img src={sharedTransportImage} alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    </Section>
  )
}
