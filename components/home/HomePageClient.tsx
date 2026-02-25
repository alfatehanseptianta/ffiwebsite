"use client";

import { startTransition, useEffect, useState } from "react";
import type { FormEvent } from "react";
import { LANDING_CONTENT, getDerivedStats } from "@/lib/content";
import type { Locale } from "@/types/landing";
import CtaSection from "./CtaSection";
import CoverageSection from "./CoverageSection";
import CriteriaSection from "./CriteriaSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import PartnersSection from "./PartnersSection";
import ProgramSection from "./ProgramSection";
import StatsStrip from "./StatsStrip";
import styles from "./HomePageClient.module.css";

type FormStatus = "idle" | "error" | "success";

const LOCALE_KEY = "ffi-locale";

function getAnchors(locale: Locale) {
  return locale === "id"
    ? {
        top: "top",
        program: "program",
        coverage: "cakupan",
        criteria: "kriteria",
        partners: "partners",
        faq: "faq",
        join: "daftar",
      }
    : {
        top: "top",
        program: "program",
        coverage: "coverage",
        criteria: "criteria",
        partners: "partners",
        faq: "faq",
        join: "apply",
      };
}

function animateCount(element: HTMLElement, target: number, suffix = "") {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    element.textContent = `${target}${suffix}`;
    return;
  }

  const duration = 700;
  const start = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = `${value}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
}

export default function HomePageClient() {
  const [locale, setLocale] = useState<Locale>("id");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");

  const content = LANDING_CONTENT[locale];
  const stats = getDerivedStats(content);
  const anchors = getAnchors(locale);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(LOCALE_KEY);
    if (savedLocale === "id" || savedLocale === "en") {
      // Hydration-safe locale sync: render ID first, then apply saved preference after mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 8);
    };

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
    const counterElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count-target]"),
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("isVisible"));
      counterElements.forEach((element) => {
        if (element.dataset.animated === "1") return;
        element.dataset.animated = "1";
        animateCount(
          element,
          Number(element.dataset.countTarget || 0),
          element.dataset.countSuffix || "",
        );
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.add("isVisible");

          if (target.dataset.countTarget && target.dataset.animated !== "1") {
            target.dataset.animated = "1";
            animateCount(
              target,
              Number(target.dataset.countTarget || 0),
              target.dataset.countSuffix || "",
            );
          }

          observer.unobserve(target);
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));
    counterElements.forEach((element) => observer.observe(element));

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

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValid) {
      setFormStatus("error");
      setFormMessage(content.cta.invalidEmailMessage);
      return;
    }

    setFormStatus("success");
    setFormMessage(content.cta.successMessage);
    setEmail("");
  };

  return (
    <div className={styles.page} id={anchors.top}>
      <div className={styles.bgOrbA} aria-hidden="true" />
      <div className={styles.bgOrbB} aria-hidden="true" />

      <NavBar
        nav={content.nav}
        locale={locale}
        brandHref="/home"
        ctaHref={`#${anchors.join}`}
        mobileNavOpen={mobileNavOpen}
        scrolled={navScrolled}
        onLocaleChange={handleLocaleChange}
        onToggleMobileNav={() => setMobileNavOpen((value) => !value)}
        onCloseMobileNav={() => setMobileNavOpen(false)}
      />

      <main>
        <Hero
          hero={content.hero}
          programHref={`#${anchors.program}`}
          joinHref={`#${anchors.join}`}
        />
        <StatsStrip stats={stats} />
        <ProgramSection id={anchors.program} section={content.program} />
        <CoverageSection
          id={anchors.coverage}
          section={content.coverage}
          joinHref={`#${anchors.join}`}
        />
        <CriteriaSection id={anchors.criteria} section={content.criteria} />
        <PartnersSection id={anchors.partners} section={content.partners} />
        <FaqSection
          id={anchors.faq}
          section={content.faq}
          openIndex={openFaqIndex}
          onToggle={handleFaqToggle}
        />
        <CtaSection
          id={anchors.join}
          section={content.cta}
          email={email}
          onEmailChange={setEmail}
          onSubmit={handleFormSubmit}
          formMessage={formMessage}
          formStatus={formStatus}
        />
      </main>

      <Footer footer={content.footer} year={new Date().getFullYear()} />
    </div>
  );
}
