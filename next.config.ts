import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize production builds
  poweredByHeader: false,
  
  // Compression and optimization
  compress: true,
  
  // Generate sitemap and robots.txt
  generateBuildId: async () => {
    return 'pgmaster-build-' + Date.now()
  },
  
  // Image optimization
  images: {
    domains: ['www.pgmaster.in'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
};

export default nextConfig;
