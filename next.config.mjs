/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath: '/My-portfolio',

  assetPrefix: '/My-portfolio/',
};

export default nextConfig;