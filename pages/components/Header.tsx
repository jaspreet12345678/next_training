import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Link from 'next/link';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

interface CustomMenuItem extends MenuItem {
    label: string;
    icon?: string;
}

const Header = () => {
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
    ];

    const start = <img alt="logo" src="https://equalengineers.com/wp-content/uploads/2024/04/dummy-logo-5b.png" height="70" className="p-mr-2"></img>;
    const end = (
        <div className="p-d-flex p-ai-center">
            <i className="pi pi-shopping-cart" style={{ fontSize: '1.5rem', marginRight: '1rem' }}></i>
            <i className="pi pi-user" style={{ fontSize: '1.5rem' }}></i>
        </div>
    );

    return (
        <div className="p-shadow-2">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
};

export default Header;
