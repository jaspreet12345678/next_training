import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: string;
    category: string;
    thumbnail: string;
    title: string;
    rating: number;
    price: number;
    description : string;
}

interface ProductContextType {
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
