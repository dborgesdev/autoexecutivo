import { footerNavigation } from "../data/navigation";
import { siteConfig } from "../data/siteConfig";
import { pageContent } from "../data/pageContent";
import logoAutoExecutivo from "/images/logo-autoexecutivo.webp";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="rodape" className="footer surface-warm">
      <Container className="footer__grid">
        <div className="footer__brand">
          <a className="brand" href="#inicio">
            <img
              className="brand__logo brand__logo--footer"
              src={logoAutoExecutivo}
              alt="Auto Executivo"
            />
          </a>
          <p className="footer__territory">{pageContent.footer.territory}</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          {footerNavigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="footer__phone"
          href={`tel:+${siteConfig.phoneNormalized}`}
        >
          {siteConfig.phoneDisplay}
        </a>
      </Container>
      <Container className="footer__legal">
        <p>© {year} Auto Executivo. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://smartlocal.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Douglas Borges - Smart Local
          </a>
        </p>
      </Container>
    </footer>
  );
}
