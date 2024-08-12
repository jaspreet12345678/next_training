import { useRouter } from 'next/router';
import { useProductContext } from '@/pages/context/ProductContext';
import { useCartContext } from '@/pages/context/CartContext';
import { useEffect } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import { Button } from 'primereact/button';

function ProductDetails() {
    const { selectedProduct, setSelectedProduct } = useProductContext();
    const { cartCount, setCartCount } = useCartContext();
    const router = useRouter();
    const { productId } = router.query;

    useEffect(() => {
        if (!selectedProduct && productId) {
            fetch(`https://dummyjson.com/products/${productId}`)
                .then((res) => res.json())
                .then((data) => {
                    setSelectedProduct(data);
                })
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [productId, selectedProduct, setSelectedProduct]);

    const addToCart = () => {
        if (selectedProduct) {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const existingProductIndex = cart.findIndex((item: any) => item.id === selectedProduct.id);

            if (existingProductIndex === -1) {
                cart.push(selectedProduct);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
            }
        }
    };

    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartCount = cart.length;
        localStorage.setItem('cartCount', cartCount.toString());
        setCartCount(cartCount);
    };

    if (!selectedProduct) return <p>Loading...</p>;

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
                <Image src={selectedProduct.thumbnail} alt={selectedProduct.title} width={0} sizes="100vw"
                    height={0} className={styles.image} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ width: '50%' }}>
                <h1 className={styles.title}>{selectedProduct.title}</h1>
                <p className={styles.description}><strong>Description :</strong>{selectedProduct.description}</p>
                <p className={styles.price}>Price: ${selectedProduct.price}</p>
                <Button onClick={addToCart}>Add to Cart</Button>
            </div>
        </div>
    );
}

export default ProductDetails;
