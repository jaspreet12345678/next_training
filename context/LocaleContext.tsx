// context/LocaleContext.tsx
import { createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface LocaleContextType {
    locale: string;
    changeLocale: (newLocale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const [locale, setLocale] = useState<string>(router.locale || 'en');

    const changeLocale = (newLocale: string) => {
        setLocale(newLocale);
        router.push(router.pathname, router.asPath, { locale: newLocale });
    };

    useEffect(() => {
        setLocale(router.locale || 'en');
    }, [router.locale]);

    return (
        <LocaleContext.Provider value={{ locale, changeLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocaleContext = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocaleContext must be used within a LanguageProvider');
    }
    return context;
};
