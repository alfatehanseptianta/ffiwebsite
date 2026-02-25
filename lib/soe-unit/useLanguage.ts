'use client';

import { useState, useEffect } from 'react';
import translations from './translations.json';

type Language = 'en' | 'id';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('language') as Language | null;
    const siteLocale = localStorage.getItem('ffi-locale') as Language | null;
    const initial = stored && (stored === 'en' || stored === 'id')
      ? stored
      : siteLocale && (siteLocale === 'en' || siteLocale === 'id')
        ? siteLocale
        : null;

    if (initial) {
      setLanguage(initial);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const syncFromSiteLocale = (event: Event) => {
      const next = (event as CustomEvent<Language>).detail;
      if (next !== 'en' && next !== 'id') return;
      setLanguage(next);
      localStorage.setItem('language', next);
    };

    window.addEventListener('ffi-locale-change', syncFromSiteLocale as EventListener);
    return () => {
      window.removeEventListener('ffi-locale-change', syncFromSiteLocale as EventListener);
    };
  }, []);

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    localStorage.setItem('ffi-locale', lang);
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let value: any = translations[language];

    for (const key of keys) {
      value = value?.[key];
    }

    return value || path;
  };

  return { language, updateLanguage, t, mounted };
}
