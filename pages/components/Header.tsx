import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Link from 'next/link';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';
import { useCartContext } from '../../context/CartContext';
import Image from 'next/image';

const Header = () => {
    const { cartCount } = useCartContext(); // Use the cart context

    const items: MenuItem[] = [
        {
            label: 'Home',
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
            label: 'Products',
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
            label: 'Contact',
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

    const start = <Image width={0} sizes="100vw"
    height={0} alt="logo" src={"https://equalengineers.com/wp-content/uploads/2024/04/dummy-logo-5b.png"} className="p-mr-2" />;
    const end = (
        <div className="p-d-flex p-ai-center">
            <Link href="/checkout" passHref>
                <i className="pi pi-shopping-cart" style={{ fontSize: '2rem', color: '#333', position: 'relative', cursor: 'pointer' }}></i>
                {cartCount > 0 && (
                    <span style={{
                        position: 'absolute',
                        top: '15px',
                        right: '35px',
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '4px 8px',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        minWidth: '24px',
                        textAlign: 'center',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    }}>
                        {cartCount}
                    </span>
                )}
            </Link>
            <i className="pi pi-user" style={{ marginLeft: '20px', fontSize: '1.5rem' }}></i>
        </div>
    );

    return (
        <div className="p-shadow-2">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
};

export default Header;
