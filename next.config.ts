import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

// Next loads this config as ESM, so `__dirname` is not defined here.
const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDir,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.zyrosite.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
