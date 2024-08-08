import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './index.module.css'; // Import the CSS module

// Define the type for a product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category?: string;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images?: string[];
}

function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching product:', error));
    }
  }, [productId]);

  if (!product) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.container}>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>Price: ${product.price}</p>
      <div className={styles.details}>
        {product.category && <p>Category: {product.category}</p>}
        {product.brand && <p>Brand: {product.brand}</p>}
        {product.rating && <p>Rating: {product.rating}</p>}
        {product.stock !== undefined && <p>Stock: {product.stock}</p>}
        {product.discountPercentage && <p>Discount: {product.discountPercentage}%</p>}
        {product.warrantyInformation && <p>Warranty: {product.warrantyInformation}</p>}
        {product.shippingInformation && <p>Shipping Info: {product.shippingInformation}</p>}
        {product.availabilityStatus && <p>Status: {product.availabilityStatus}</p>}
        {product.returnPolicy && <p>Return Policy: {product.returnPolicy}</p>}
        {product.minimumOrderQuantity && <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>}
        {product.reviews && (
          <div className={styles.review}>
            <h3>Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index}>
                <p>{review.reviewerName} : {review.comment} - Rating: {review.rating}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
