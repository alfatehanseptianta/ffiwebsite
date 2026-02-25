import Image from "next/image";
import type { Locale } from "@/types/landing";
import styles from "./NavBar.module.css";

type NavBarProps = {
  nav: {
    brandText: string;
    menuLabel: string;
    languageLabel: string;
    links: Array<{ href: string; label: string }>;
    ctaLabel: string;
  };
  locale: Locale;
  brandHref?: string;
  ctaHref: string;
  mobileNavOpen: boolean;
  scrolled: boolean;
  onLocaleChange: (locale: Locale) => void;
  onToggleMobileNav: () => void;
  onCloseMobileNav: () => void;
};

export default function NavBar({
  nav,
  locale,
  brandHref = "/home",
  ctaHref,
  mobileNavOpen,
  scrolled,
  onLocaleChange,
  onToggleMobileNav,
  onCloseMobileNav,
}: NavBarProps) {
  return (
    <header className={`${styles.wrapper} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href={brandHref} onClick={onCloseMobileNav}>
          <Image
            src="/assets/ffi/logo-ffi.png"
            alt="Future Farmers Indonesia logo"
            width={48}
            height={48}
          />
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={ctaHref} className={styles.ctaDesktop}>
            {nav.ctaLabel}
          </a>

          <div className={styles.langGroup} role="group" aria-label={nav.languageLabel}>
            <button
              type="button"
              className={`${styles.langButton} ${locale === "id" ? styles.langButtonActive : ""}`}
              onClick={() => onLocaleChange("id")}
              aria-pressed={locale === "id"}
              aria-label="Bahasa Indonesia"
            >
              <Image
                src="/soe-unit/flags/id.svg"
                alt=""
                width={24}
                height={24}
                className={styles.langFlag}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className={`${styles.langButton} ${locale === "en" ? styles.langButtonActive : ""}`}
              onClick={() => onLocaleChange("en")}
              aria-pressed={locale === "en"}
              aria-label="English"
            >
              <Image
                src="/soe-unit/flags/us.svg"
                alt=""
                width={24}
                height={24}
                className={styles.langFlag}
                aria-hidden="true"
              />
            </button>
          </div>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={onToggleMobileNav}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav-panel"
          >
            <span className="srOnly">{nav.menuLabel}</span>
            <span className={`${styles.hamburger} ${mobileNavOpen ? styles.hamburgerOpen : ""}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        className={`${styles.mobilePanel} ${mobileNavOpen ? styles.mobilePanelOpen : ""}`}
        aria-hidden={!mobileNavOpen}
      >
        <div className={`container ${styles.mobilePanelInner}`}>
          <div className={styles.mobileLangWrap} role="group" aria-label={nav.languageLabel}>
            <button
              type="button"
              className={`${styles.langButton} ${locale === "id" ? styles.langButtonActive : ""}`}
              onClick={() => onLocaleChange("id")}
              aria-pressed={locale === "id"}
              aria-label="Bahasa Indonesia"
            >
              <Image
                src="/soe-unit/flags/id.svg"
                alt=""
                width={24}
                height={24}
                className={styles.langFlag}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className={`${styles.langButton} ${locale === "en" ? styles.langButtonActive : ""}`}
              onClick={() => onLocaleChange("en")}
              aria-pressed={locale === "en"}
              aria-label="English"
            >
              <Image
                src="/soe-unit/flags/us.svg"
                alt=""
                width={24}
                height={24}
                className={styles.langFlag}
                aria-hidden="true"
              />
            </button>
          </div>

          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {nav.links.map((link) => (
              <a key={link.href} href={link.href} className={styles.mobileNavLink} onClick={onCloseMobileNav}>
                {link.label}
              </a>
            ))}
            <a href={ctaHref} className={styles.mobileCta} onClick={onCloseMobileNav}>
              {nav.ctaLabel}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
