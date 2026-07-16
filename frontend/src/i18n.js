/**
 * i18next setup — all user-facing copy lives in src/locales/{en,nl,es,fr}.json.
 *
 * The browser language is auto-detected on first visit (and persisted by the
 * detector); LangToggle cycles through the four languages manually.
 * Components resolve keys via `useTranslation()`.
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import nl from './locales/nl.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            nl: { translation: nl },
            es: { translation: es },
            fr: { translation: fr },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already escapes rendered strings
        },
    });

export default i18n;
