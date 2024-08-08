import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

function Index() {
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
            <Image
              src={product.thumbnail}
              alt={product.title}
              width = {250}
              height={200}
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
