import React, { useState } from 'react';
import { DataView } from 'primereact/dataview';
import ProductCard from '../components/ProductCard';
import { useRouter } from 'next/router';
import { Paginator } from 'primereact/paginator';
import { GetServerSideProps } from 'next';

interface Product {
  id: string;
  category: string;
  stockStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
}

type GetSeverity = (product: Product) => 'success' | 'info' | 'warning' | 'danger' | null;

interface ProductPageProps {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
}

export default function ProductPage({ products, total, page, pageSize }: ProductPageProps) {
  const [layout, setLayout] = useState('grid');
  const router = useRouter();

  const getSeverity: GetSeverity = (product) => {
    switch (product.stockStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return null;
    }
  };

  const itemTemplate = (product: Product, layout: 'grid') => (
    <ProductCard key={product.id} product={product} layout={layout} index={products.indexOf(product)} getSeverity={getSeverity} />
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
        layout={layout}
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
