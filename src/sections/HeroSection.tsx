import { pageContent } from '../data/pageContent'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { Button } from '../components/Button'
import { WhatsAppLink } from '../components/WhatsAppLink'
import heroExecutive from '../assets/hero-executive.webp'

export function HeroSection() {
  const content = pageContent.hero
  return (
    <section id="inicio" className="hero surface-dark" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__image"
          src={heroExecutive}
          alt=""
          width="1440"
          height="810"
          fetchPriority="high"
        />
        <div className="hero__image-shade" />
      </div>

      <Container className="hero__grid">
        <div className="hero__content">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 id="hero-title">{content.heading}</h1>
          <p>{content.text}</p>
          <div className="hero__actions">
            <WhatsAppLink variant="light">{content.primaryCta}</WhatsAppLink>
            <Button href="#servicos" variant="ghost">{content.secondaryCta}</Button>
          </div>
          <p className="hero__territory">{content.territory}</p>
        </div>
</Container>
    </section>
  )
}
