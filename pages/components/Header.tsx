import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Link from 'next/link';
import { MenuItem } from 'primereact/menuitem';

interface CustomMenuItem extends MenuItem {
    label: string;
    icon?: string;
}

interface MenuOptions {
    className: string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    [key: string]: any;  // For any other properties that might be passed in
}

const Header = () => {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            template: (item: CustomMenuItem, options: MenuOptions) => {
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
            template: (item: CustomMenuItem, options: MenuOptions) => {
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
    const end = <i className="pi pi-user" style={{ fontSize: '1.5rem' }}></i>;

    return (
        <div className="p-shadow-2">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
};

export default Header;
