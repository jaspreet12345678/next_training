import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "./components/Banner";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  images: { src: string; alt: string }[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const images = [
    { src: '/images/perfume1.jpg', alt: 'Banner 1' },
    { src: '/images/1657.jpg', alt: 'Banner 3' },
    { src: '/images/1547.jpg', alt: 'Banner 2' },
    { src: '/images/1111.jpg', alt: 'Banner 3' },
  ];

  return {
    props: {
      images,
      messages: (await import(`/./messages/${locale}.json`)).default
    },
  };
};

export default function Home({ images }: HomeProps) {
  const t = useTranslations('Index');
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <Banner images={images} />
      </main>
    </>
  );
}
