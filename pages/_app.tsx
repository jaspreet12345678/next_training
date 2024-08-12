import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

export default function App({ Component, pageProps }: AppProps) { 
  return (
    <CartProvider>
      <Layout>
        <ProductProvider>
            <Component {...pageProps} />
        </ProductProvider>
      </Layout>
    </CartProvider>
  )
}
