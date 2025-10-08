import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'vi';

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

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');
    const [translations, setTranslations] = useState<any>({});

    useEffect(() => {
        // Load language from localStorage
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang) {
            setLanguageState(savedLang);
            if (typeof document !== 'undefined') {
                document.documentElement.setAttribute('data-lang', savedLang);
            }
        } else {
            if (typeof document !== 'undefined') {
                document.documentElement.setAttribute('data-lang', 'en');
            }
        }
    }, []);

    useEffect(() => {
        // Load translations
        import(`../locales/${language}.json`).then((module) => {
            setTranslations(module.default);
        });
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-lang', lang);
        }
    };

    const t = (key: string): string => {
        const keys = key.split('.');
        let value = translations;

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
