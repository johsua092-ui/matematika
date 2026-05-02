/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mtk-simple-',
  assetPrefix: '/mtk-simple-/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
