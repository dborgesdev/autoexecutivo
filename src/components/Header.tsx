import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { navigation } from "../data/navigation";
import { pageContent } from "../data/pageContent";
import logoAutoExecutivo from "/images/logo-autoexecutivo.webp";
import { Container } from "./Container";
import { WhatsAppLink } from "./WhatsAppLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1200px)");
    const onChange = () => {
      if (media.matches) dialog.current?.close();
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  function closeMenu(href?: string) {
    dialog.current?.close();
    if (href)
      requestAnimationFrame(() =>
        document
          .querySelector<HTMLElement>(href)
          ?.focus({ preventScroll: true }),
      );
  }

  function containTab(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        "a[href], button:not(:disabled)",
      ),
    );
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <Container className="header__inner">
        <a href="#inicio" className="brand">
          <img
            className="brand__logo"
            src={logoAutoExecutivo}
            alt="Auto Executivo"
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <WhatsAppLink className="header__cta" variant="light">
            {pageContent.headerCta}
          </WhatsAppLink>
          <button
            ref={trigger}
            type="button"
            className="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              dialog.current?.showModal();
              setMenuOpen(true);
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </Container>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Navegação principal"
        onKeyDown={containTab}
        onClose={() => {
          setMenuOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="mobile-menu__inner">
          <div className="mobile-menu__top">
            <span className="brand">
              <img
                className="brand__logo brand__logo--menu"
                src={logoAutoExecutivo}
                alt="Auto Executivo"
              />
            </span>
            <button
              type="button"
              className="menu-close"
              aria-label="Fechar menu"
              onClick={() => closeMenu()}
            >
              ×
            </button>
          </div>
          <nav aria-label="Navegação mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => closeMenu(item.href)}
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <WhatsAppLink onClick={() => closeMenu()}>
            {pageContent.headerCta}
          </WhatsAppLink>
        </div>
      </dialog>
    </header>
  );
}
