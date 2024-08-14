import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Link from 'next/link';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';
import { useCartContext } from '../../context/CartContext';
import Image from 'next/image';
import LocaleSwitcher from './LocaleSwitcher';

type HeaderProps = {
    children?: ReactNode;
};

export const getStaticProps = async ({ locale }:any) => {
  
    return {
      props: {
        messages: (await import(`../../messages/${locale}.json`)).default
      },
    };
  };

const Header: React.FC<HeaderProps> = ({ children }) => {
    const t = useTranslations('Header');
    const { cartCount } = useCartContext();

    const items: MenuItem[] = [
        {
            label: t('home'), // Translated label
            icon: 'pi pi-fw pi-home',
            template: (item: MenuItem, options: MenuItemOptions) => {
                return (
                    <Link href="/" className={options.className}>
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </Link>
                );
            },
        },
        {
            label: t('products'), // Translated label
            icon: 'pi pi-fw pi-th-large',
            template: (item: MenuItem, options: MenuItemOptions) => {
                return (
                    <Link href="/product" className={options.className}>
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </Link>
                );
            },
        },
        {
            label: t('contact'), // Translated label
            icon: 'pi pi-fw pi-envelope',
            template: (item: MenuItem, options: MenuItemOptions) => {
                return (
                    <Link href="/contact" className={options.className}>
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </Link>
                );
            },
        },
    ];

    const start = (
        <>
            <Image
                width={0}
                sizes="100vw"
                height={0}
                style={{ width: '100%', height: '75px' }}
                alt="logo"
                src="https://equalengineers.com/wp-content/uploads/2024/04/dummy-logo-5b.png"
                className="p-mr-2"
            />
            {children}
        </>
    );

    const end = (
        <div className="p-d-flex p-ai-center" style={{display:'flex',alignItems:'center'}}>
            <LocaleSwitcher />
            <Link href="/checkout" passHref style={{marginLeft:'5px'}}>
                <i
                    className="pi pi-shopping-cart"
                    style={{
                        fontSize: '2rem',
                        color: '#333',
                        position: 'relative',
                        cursor: 'pointer',
                    }}
                ></i>
                {cartCount > 0 && (
                    <span
                        style={{
                            position: 'absolute',
                            top: '30px',
                            right: '40px',
                            backgroundColor: '#ff4d4d',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '4px 8px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            minWidth: '24px',
                            textAlign: 'center',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        {cartCount}
                    </span>
                )}
            </Link>
            <i
                className="pi pi-user"
                style={{ marginLeft: '20px', fontSize: '1.5rem' }}
            ></i>
        </div>
    );

    return (
        <div className="p-shadow-2">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
};

export default Header;
