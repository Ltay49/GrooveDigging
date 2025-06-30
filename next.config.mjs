/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['groovedigging.netlify.app'], // 👈 allow external image optimization
  },
};

export default nextConfig;
