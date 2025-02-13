import type { NextConfig } from "next";

const { env } = require('process');
const strapiUrl = env.NEXT_PUBLIC_STRAPI_URL
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['drive.google.com','shutterstock.com',`${strapiUrl}/uploads/`]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Mantén el loader de SVG en Webpack
    });
    return config;
  },
};

export default nextConfig;
