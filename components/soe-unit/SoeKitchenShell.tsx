"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import { useSiteChrome } from "@/components/site/useSiteChrome";
import { LANDING_CONTENT } from "@/lib/content";
import styles from "./SoeKitchenShell.module.css";

type Props = {
  children: ReactNode;
};

export default function SoeKitchenShell({ children }: Props) {
  const { locale, mobileNavOpen, navScrolled, setMobileNavOpen, handleLocaleChange } = useSiteChrome();
  const shared = LANDING_CONTENT[locale];

  useEffect(() => {
    window.localStorage.setItem("ffi-locale", locale);
    window.dispatchEvent(
      new CustomEvent("ffi-locale-change", {
        detail: locale,
      }),
    );
  }, [locale]);

  return (
    <div className={styles.pageRoot} id="top">
      <NavBar
        nav={shared.nav}
        locale={locale}
        brandHref="/home"
        ctaHref="/kontak"
        mobileNavOpen={mobileNavOpen}
        scrolled={navScrolled}
        onLocaleChange={handleLocaleChange}
        onToggleMobileNav={() => setMobileNavOpen((value) => !value)}
        onCloseMobileNav={() => setMobileNavOpen(false)}
      />

      <main>{children}</main>

      <Footer footer={shared.footer} year={new Date().getFullYear()} />
    </div>
  );
}
