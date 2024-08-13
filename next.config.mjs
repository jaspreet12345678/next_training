/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com','freepik.com','equalengineers.com'], // Allow this domain for images
  },
};

export default nextConfig;
