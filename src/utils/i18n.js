// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      signIn: "Sign In",
      language: "English",
    },
  },
  hi: {
    translation: {
      signIn: "साइन इन करें",
      language: "हिन्दी",
    },
  },
  fr: {
    translation: {
      signIn: "Se connecter",
      language: "Français",
    },
  },
};

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Connect with React
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // Language will persist
    },
  });

export default i18n;
