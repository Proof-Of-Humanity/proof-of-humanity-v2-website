import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  poweredByHeader: false,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 0, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560, 3200, 3840, 4800, 5120, 6400, 7680, 9600],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768, 1024, 1280, 1536, 1920, 2048, 2560, 3200, 3840, 4800, 5120, 6400, 7680],
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
