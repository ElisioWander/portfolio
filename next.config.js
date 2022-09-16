/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: { allowFutureImage: true },
  },
  images: {
    domains: ['images.prismic.io'],
  },
}

module.exports = nextConfig
