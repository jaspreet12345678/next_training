import React from 'react';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

interface Product {
    id: string;
    category: string;
    thumbnail: string;
    title: string;
    rating: number;
    price: number;
}

interface ProductCardProps {
    product: Product;
    layout: 'grid';
    index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, layout, index }) => {

    const gridItem = () => (
        <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
            <div className="p-4 border-1 surface-border surface-card border-round">
                <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag"></i>
                        <span className="font-semibold">{product.category}</span>
                    </div>
                </div>
                <div className="flex flex-column align-items-center gap-3 py-5">
                    <img className="w-9 shadow-2 border-round" src={product.thumbnail} alt={product.title} />
                    <div className="text-2xl font-bold">{product.title}</div>
                    <Rating value={product.rating} readOnly cancel={false} />
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-2xl font-semibold">${product.price}</span>
                    <Button icon="pi pi-shopping-cart" className="p-button-rounded" />
                </div>
            </div>
        </div>
    );

    return layout === 'grid' ? gridItem() : '';
}

export default ProductCard;