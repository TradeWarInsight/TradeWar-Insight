/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.tradewarinsight.xyz'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
};

module.exports = nextConfig; 