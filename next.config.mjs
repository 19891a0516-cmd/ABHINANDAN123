/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/radarseq12',
  assetPrefix: '/radarseq12/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
