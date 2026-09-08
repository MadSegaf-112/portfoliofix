import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage, type Language } from '@/context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleSelect = (newLang: Language, e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguage(newLang);
  };

  return (
    <div
      className="macx-language-switcher"
      onClick={(e) => e.stopPropagation()}
      aria-label="Language Switcher"
    >
      <span className="lang-globe-icon" aria-hidden="true">
        <Globe size={13} />
      </span>
      <div className="lang-toggle-group">
        <button
          type="button"
          className={`lang-option-btn ${language === 'EN' ? 'is-active' : ''}`}
          onClick={(e) => handleSelect('EN', e)}
          title="English"
          aria-label="Switch to English"
        >
          {language === 'EN' && (
            <motion.div
              layoutId="activeLangPill"
              className="lang-active-indicator"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span className="lang-text">EN</span>
        </button>

        <button
          type="button"
          className={`lang-option-btn ${language === 'ID' ? 'is-active' : ''}`}
          onClick={(e) => handleSelect('ID', e)}
          title="Bahasa Indonesia"
          aria-label="Switch to Bahasa Indonesia"
        >
          {language === 'ID' && (
            <motion.div
              layoutId="activeLangPill"
              className="lang-active-indicator"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span className="lang-text">ID</span>
        </button>
      </div>
    </div>
  );
};
