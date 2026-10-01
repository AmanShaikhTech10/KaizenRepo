// src/contexts/LanguageContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';

// Define your translation dictionary
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Our Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.career': 'Career',
    'nav.contact': 'Contact Us',
  },
  mr: {
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याबद्दल',
    'nav.services': 'आमच्या सेवा',
    'nav.portfolio': 'पोर्टफोलिओ',
    'nav.pricing': 'किंमत',
    'nav.career': 'करिअर',
    'nav.contact': 'संपर्क साधा',
  }
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // Load saved language from localStorage, default to English
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app-lang') || 'en';
  });

  // Save preference whenever it changes
  useEffect(() => {
    localStorage.setItem('app-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'mr' : 'en'));
  };

  // The translation function
  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};