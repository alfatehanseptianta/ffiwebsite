"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import Footer from "@/components/home/Footer";
import { useSiteChrome } from "@/components/site/useSiteChrome";
import { LANDING_CONTENT } from "@/lib/content";
import styles from "./SoeKitchenShell.module.css";

type Props = {
  children: ReactNode;
};

export default function SoeKitchenShell({ children }: Props) {
  const { locale } = useSiteChrome();
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
      <main className={styles.dashboardHost}>{children}</main>
      <Footer footer={shared.footer} year={new Date().getFullYear()} />
    </div>
  );
}
