import { pageContent } from '../data/pageContent'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Button } from '../components/Button'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { BrandDiagonal } from '../components/BrandDiagonal'

export function HeroSection() {
  const content = pageContent.hero
  return (
    <section id="inicio" className="hero surface-dark" aria-labelledby="hero-title" tabIndex={-1}>
      <Container className="hero__grid">
        <div className="hero__content">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 id="hero-title">{content.heading}</h1>
          <p>{content.text}</p>
          <div className="hero__actions"><WhatsAppLink variant="light">{content.primaryCta}</WhatsAppLink><Button href="#servicos" variant="ghost">{content.secondaryCta}</Button></div>
          <p className="hero__territory">{content.territory}</p>
        </div>
        <div className="hero__media"><MediaPlaceholder slot="hero" /><BrandDiagonal /></div>
      </Container>
    </section>
  )
}
