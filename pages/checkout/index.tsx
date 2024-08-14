import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { useTranslations } from 'next-intl';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity?: number;
}


export const getStaticProps = async ({ locale }:any) => {
    return {
        props: {
            messages: (await import(`../../messages/${locale}.json`)).default
        },
    };
};

const Checkout = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartTotal, setCartTotal] = useState<number>(0);
    const t = useTranslations('Checkout');

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
        setCartItems(storedCartItems);

        // Calculate total of all prices
        const total = storedCartItems.reduce<number>((acc, item) => {
            return acc + (item.price * (item.quantity || 1));
        }, 0);

        setCartTotal(total);
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{t('title')}</h1>
            {cartItems.length > 0 ? (
                <div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>
                                    {t('product')}
                                </th>
                                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>
                                    {t('quantity')}
                                </th>
                                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>
                                    {t('price')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.title}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.quantity || 1}</td>
                                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>${item.price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <h2>{t('total')}: ${cartTotal.toFixed(2)}</h2>
                    </div>
                    <Button>{t('checkout_button')}</Button>
                </div>
            ) : (
                <div>
                    <h2>{t('empty_cart')}</h2>
                </div>
            )}
        </div>
    );
};

export default Checkout;
