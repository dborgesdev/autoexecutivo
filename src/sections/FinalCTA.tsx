import { pageContent } from '../data/pageContent'
import { siteConfig } from '../data/siteConfig'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { BrandDiagonal } from '../components/BrandDiagonal'

export function FinalCTA() {
  const content = pageContent.contact
  return (
    <Section id="contato" labelledBy="contact-title" tone="dark" className="final-cta">
      <BrandDiagonal />
      <div className="final-cta__content"><Eyebrow>{content.eyebrow}</Eyebrow><h2 id="contact-title">{content.heading}</h2><p>{content.text}</p><div className="final-cta__actions"><WhatsAppLink variant="light">{content.cta}</WhatsAppLink><a className="phone-link" href={`tel:+${siteConfig.phoneNormalized}`}>{siteConfig.phoneDisplay}</a></div></div>
    </Section>
  )
}
