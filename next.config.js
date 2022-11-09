/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },

  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
