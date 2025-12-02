import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

type Language = 'en' | 'vi';

// Pre-loaded translations - always available
const translations: Record<Language, typeof enTranslations> = {
    en: enTranslations,
    vi: viTranslations
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: React.ReactNode;
}

// Helper to get nested value from object
const getNestedValue = (obj: any, path: string): string | undefined => {
    const keys = path.split('.');
    let value = obj;
    for (const key of keys) {
        if (value === undefined || value === null) return undefined;
        value = value[key];
    }
    return typeof value === 'string' ? value : undefined;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    // Always start with 'en' for SSR consistency
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        // Load language from localStorage on client only
        const savedLang = localStorage.getItem('language');
        if (savedLang === 'en' || savedLang === 'vi') {
            setLanguageState(savedLang);
            document.documentElement.setAttribute('data-lang', savedLang);
        } else {
            document.documentElement.setAttribute('data-lang', 'en');
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('data-lang', lang);
    };

    // Memoize translation function
    const t = useMemo(() => {
        const currentTranslations = translations[language];
        return (key: string): string => {
            const value = getNestedValue(currentTranslations, key);
            // Always return the English fallback if current language doesn't have the key
            if (value === undefined) {
                const fallback = getNestedValue(translations.en, key);
                return fallback ?? key;
            }
            return value;
        };
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
