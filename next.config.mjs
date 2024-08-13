/** @type {import('next').NextConfig} */
import i18n from "./next-i18next.config.js";

const nextConfig = {
  i18n: i18n.i18n,
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com','freepik.com','equalengineers.com'], // Allow this domain for images
  },
};

export default nextConfig;
