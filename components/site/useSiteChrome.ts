"use client";

import { startTransition, useEffect, useState } from "react";
import type { Locale } from "@/types/landing";

const LOCALE_KEY = "ffi-locale";

export function useSiteChrome() {
  const [locale, setLocale] = useState<Locale>("id");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(LOCALE_KEY);
    if (savedLocale === "id" || savedLocale === "en") {
      // Hydration-safe locale sync.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("isVisible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.classList.add("isVisible");
          observer.unobserve(target);
        }
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [locale]);

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    window.localStorage.setItem(LOCALE_KEY, nextLocale);
    setMobileNavOpen(false);
    startTransition(() => {
      setLocale(nextLocale);
    });
  };

  return {
    locale,
    mobileNavOpen,
    navScrolled,
    setMobileNavOpen,
    setNavScrolled,
    handleLocaleChange,
  };
}
