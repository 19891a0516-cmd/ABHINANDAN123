/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled: React Strict Mode double-invokes effects in dev, which can
  // double-mount the WebGL canvas that @react-three/fiber creates and has
  // been a known source of "ReactCurrentOwner" style errors with R3F + Next.
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
