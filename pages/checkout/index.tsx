import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity?: number;
}

const Checkout = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartTotal, setCartTotal] = useState<number>(0);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
        setCartItems(storedCartItems);

        // Calculate total of all prices
        const total = storedCartItems.reduce<number>((acc, item) => {
            return acc + (item.price * (item.quantity || 1)); // Multiply by quantity if it exists
        }, 0);

        console.log(total, "total");
        setCartTotal(total);
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Checkout</h1>
            {cartItems.length > 0 ? (
                <div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Product</th>
                                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Quantity</th>
                                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Price</th>
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
                        <h2>Total: ${cartTotal.toFixed(2)}</h2>
                    </div>
                    <Button>Checkout</Button>
                </div>
            ) : (
                <div>
                    <h2>Your cart is empty</h2>
                </div>
            )}
        </div>
    );
};

export default Checkout;
