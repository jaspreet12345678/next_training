import { useRouter } from 'next/router';
import { useProductContext } from '../../../context/ProductContext';
import { useCartContext } from '../../../context/CartContext';
import { useEffect } from 'react';
import styles from '../../styles/product.module.css';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { useTranslations } from 'next-intl';

export const getStaticPaths = async () => {
    // Fetch a list of product IDs that should be statically generated
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    // Generate paths from the product IDs
    const paths = data.products.map((product: any) => ({
        params: { productId: product.id.toString() },
    }));

    return {
        paths,
        fallback: 'blocking', // or 'false' if you want to generate only the paths returned by `getStaticPaths`
    };
};

export const getStaticProps = async ({ params, locale }: any) => {
    const productId = params.productId;

    // Fetch the product data
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const productData = await response.json();

    return {
        props: {
            selectedProduct: productData,
            messages: (await import(`../../../messages/${locale}.json`)).default,
        },
    };
};

function ProductDetails({ selectedProduct }: { selectedProduct: any }) {
    const { setSelectedProduct } = useProductContext();
    const { cartCount, setCartCount } = useCartContext();
    const t = useTranslations('Product');

    useEffect(() => {
        setSelectedProduct(selectedProduct);
    }, [selectedProduct, setSelectedProduct]);

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
                <h1 className={styles.title}><strong>{t('title')} :</strong>{selectedProduct.title}</h1>
                <p className={styles.description}><strong>{t('description')} :</strong>{selectedProduct.description}</p>
                <p className={styles.price}>{t('title')}: ${selectedProduct.price}</p>
                <Button onClick={addToCart}>Add to Cart</Button>
            </div>
        </div>
    );
}

export default ProductDetails;
