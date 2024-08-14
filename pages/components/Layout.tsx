import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTranslations } from 'next-intl';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const t = useTranslations('PageLayout');
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
