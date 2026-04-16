/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  turbopack: {},
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath
      }
    : {})
};

export default nextConfig;
