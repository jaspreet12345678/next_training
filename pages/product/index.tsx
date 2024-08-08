import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Define the type for a product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  // Add any other fields you expect in the product object
}

function Index() {
  // Define the state with the Product array type
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
              width: '250px',
            }}
          >
            <Link href={`product/${product.id}`}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: '100%', borderRadius: '10px' }}
              />
              </Link>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
