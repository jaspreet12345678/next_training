import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CartContextType {
    cartCount: number;
    setCartCount: (count: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCartCount = parseInt(localStorage.getItem('cartCount') || '0');
            setCartCount(savedCartCount);
        }
    }, []);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};
