import React, { createContext, useContext, useState } from 'react';
import { translations, type TranslationKey, getLocalizedData } from '@/data/translations';

export type Language = 'EN' | 'ID';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  data: ReturnType<typeof getLocalizedData>;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('preferred_language') as Language) || 'EN';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('preferred_language', newLang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations['EN'][key] || key;
  };

  const data = getLocalizedData(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
