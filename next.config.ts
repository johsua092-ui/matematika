import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/matematika",
  assetPrefix: "/matematika",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
