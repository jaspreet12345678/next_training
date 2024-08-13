import React, { useState } from 'react';
import { DataView } from 'primereact/dataview';
import ProductCard from '../components/ProductCard';
import { useRouter } from 'next/router';
import { Paginator } from 'primereact/paginator';
import { GetServerSideProps } from 'next';
import { useProductContext } from '../../context/ProductContext';

interface Product {
  id: string;
  category: string;
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
  description: string;
}

interface ProductPageProps {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
}

export default function ProductPage({ products, total, page, pageSize }: ProductPageProps) {
  const router = useRouter();
  const { setSelectedProduct } = useProductContext();

  const itemTemplate = (product: Product) => (
    <ProductCard
      key={product.id}
      product={product}
      layout={'grid'}
      index={products.indexOf(product)}
      onClick={() => {
        setSelectedProduct(product);
        router.push(`/product/${product.id}`);
      }}
    />
  );

  const onPageChange = (event: any) => {
    const newPage = event.page + 1;
    router.push(`?page=${newPage}`, undefined, { scroll: false });
  };

  return (
    <div className="card">
      <DataView
        value={products}
        itemTemplate={itemTemplate}
        layout={'grid'}
      />
      <Paginator
        first={(page - 1) * pageSize}
        rows={pageSize}
        totalRecords={total}
        onPageChange={onPageChange}
        template="PrevPageLink PageLinks NextPageLink"
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const pageSize = 12;
  const skip = (page - 1) * pageSize;

  const res = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`);
  const data = await res.json();

  return {
    props: {
      products: data.products,
      total: data.total,
      page,
      pageSize
    },
  };
};
