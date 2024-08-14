import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";
import { appWithTranslation } from "next-i18next";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="Europe/Vienna"
    >
      <CartProvider>
        <Layout>
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
        </Layout>
      </CartProvider>
    </NextIntlClientProvider>
  )
}

export default appWithTranslation(App);
