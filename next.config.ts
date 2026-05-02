import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mtk-simple-',
  assetPrefix: '/mtk-simple-/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
