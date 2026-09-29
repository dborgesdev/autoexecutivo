import { footerNavigation } from '../data/navigation'
import { siteConfig } from '../data/siteConfig'
import { pageContent } from '../data/pageContent'
import logoAutoExecutivo from '../assets/logo-autoexecutivo.webp'
import { Container } from './Container'

export function Footer() {
  return (
    <footer id="rodape" className="footer surface-warm">
      <Container className="footer__grid">
        <div className="footer__brand">
          <a className="brand" href="#inicio"><img className="brand__logo brand__logo--footer" src={logoAutoExecutivo} alt="Auto Executivo" /></a>
          <p className="footer__territory">{pageContent.footer.territory}</p>
        </div>
        <nav aria-label="Navegação do rodapé">{footerNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <a className="footer__phone" href={`tel:+${siteConfig.phoneNormalized}`}>{siteConfig.phoneDisplay}</a>
      </Container>
    </footer>
  )
}
