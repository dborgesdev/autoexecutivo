import { footerNavigation } from '../data/navigation'
import { siteConfig } from '../data/siteConfig'
import { pageContent } from '../data/pageContent'
import { Container } from './Container'

export function Footer() {
  return (
    <footer id="rodape" className="footer surface-warm">
      <Container className="footer__grid">
        <div><a className="brand" href="#inicio">{siteConfig.brand}</a><p className="footer__territory">{pageContent.footer.territory}</p></div>
        <nav aria-label="Navegação do rodapé">{footerNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <a className="footer__phone" href={`tel:+${siteConfig.phoneNormalized}`}>{siteConfig.phoneDisplay}</a>
      </Container>
      {/* Copyright omitido até aprovação da redação em docs/content.md §11. */}
    </footer>
  )
}
