'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
// import arTranslations from '@/locales/ar.json';
import frHeroTranslations from '@/locals/fr/hero.json';
import enHeroTranslations from '@/locals/en/hero.json';
import frProblemTranslations from '@/locals/fr/problem.json';
import enProblemTranslations from '@/locals/en/problem.json';
import frServiceTranslations from '@/locals/fr/service.json';
import enServiceTranslations from '@/locals/en/service.json';
import frNavigationTranslations from '@/locals/fr/navigation.json';
import enNavigationTranslations from '@/locals/en/navigation.json';
import frCtaTranslations from '@/locals/fr/cta.json';
import enCtaTranslations from '@/locals/en/cta.json';
import frFooterTranslations from '@/locals/fr/footer.json';
import enFooterTranslations from '@/locals/en/footer.json';
import frProcessTranslations from '@/locals/fr/process.json';
import enProcessTranslations from '@/locals/en/process.json';
import frStatsTranslations from '@/locals/fr/stats.json';
import enStatsTranslations from '@/locals/en/stats.json';
import frStickyCtaTranslations from '@/locals/fr/stickeyCta.json';
import enStickyCtaTranslations from '@/locals/en/stickeyCta.json';
import frPortfolioTranslations from '@/locals/fr/portfolio.json';
import enPortfolioTranslations from '@/locals/en/portfolio.json';
import frTestimonialsTranslations from '@/locals/fr/testimonials.json';
import enTestimonialsTranslations from '@/locals/en/testimonials.json';
import frFaqTranslations from '@/locals/fr/faq.json';
import enFaqTranslations from '@/locals/en/faq.json';
import frAboutTranslations from '@/locals/fr/about/about.json';
import enAboutTranslations from '@/locals/en/about/about.json';

// Merge translations for each locale
const translations = {
//   ar: { ...arHeroTranslations, ...arProblemTranslations, ...arServiceTranslations, ... },
  fr: { 
    ...frHeroTranslations, 
    ...frProblemTranslations, 
    ...frServiceTranslations,
    ...frNavigationTranslations,
    ...frCtaTranslations,
    ...frFooterTranslations,
    ...frProcessTranslations,
    ...frStatsTranslations,
    ...frStickyCtaTranslations,
    ...frPortfolioTranslations,
    ...frTestimonialsTranslations,
    ...frFaqTranslations,
    ...frAboutTranslations
  },
  en: { 
    ...enHeroTranslations, 
    ...enProblemTranslations, 
    ...enServiceTranslations,
    ...enNavigationTranslations,
    ...enCtaTranslations,
    ...enFooterTranslations,
    ...enProcessTranslations,
    ...enStatsTranslations,
    ...enStickyCtaTranslations,
    ...enPortfolioTranslations,
    ...enTestimonialsTranslations,
    ...enFaqTranslations,
    ...enAboutTranslations
  }
};

const I18nContext = createContext();

// Helper to get initial locale from localStorage (runs only on client)
function getInitialLocale(defaultLocale) {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }
  try {
    const stored = localStorage.getItem('locale');
    if (stored && (stored === 'en' || stored === 'fr' || stored === 'ar')) {
      return stored;
    }
  } catch {
    // ignore localStorage errors
  }
  return defaultLocale;
}

export function I18nProvider({ children, defaultLocale = 'en' }) {
  // Initialize state with value from localStorage to avoid useEffect setState
  const [locale, setLocale] = useState(() => getInitialLocale(defaultLocale));

  // Save locale to localStorage and update DOM when it changes
  useEffect(() => {
    try {
      localStorage.setItem('locale', locale);
      // Update HTML lang attribute and dir for RTL
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    } catch {
      // ignore localStorage errors
    }
  }, [locale]);

  const t = useCallback((key, params = {}) => {
    const keys = key.split('.');
    let value = translations[locale] || translations['en'];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = translations['en'];
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = value[k2];
          } else {
            return params.returnObjects ? undefined : key;
          }
        }
        break;
      }
    }

    // If returnObjects is requested, return the value as-is (could be array or object)
    if (params.returnObjects) {
      return value;
    }

    // Return arrays and objects as-is (for .map() and other operations)
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === 'object' && value !== null) {
      return value;
    }

    // Replace params in translation string
    if (typeof value === 'string' && params) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
        return params[paramKey] !== undefined ? params[paramKey] : match;
      });
    }

    return typeof value === 'string' ? value : key;
  }, [locale]);

  const changeLocale = useCallback((newLocale) => {
    if (newLocale === 'en' || newLocale === 'fr') {
      setLocale(newLocale);
    }
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t, changeLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}