import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";
import { LanguageProvider } from "@/context/LocaleContext";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) =>  {
  return (
    <CartProvider>
      <LanguageProvider>
        <Layout>
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
        </Layout>
      </LanguageProvider>
    </CartProvider>
  )
}

export default appWithTranslation(App);
