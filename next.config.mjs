/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add next-image-export-optimizer config for static image optimization
  ...(process.env.NODE_ENV === 'production' ? {
    optimizeImages: true,
    generateImageFields: ['public/images'],
  } : {}),
  transpilePackages: ['next-image-export-optimizer'],
}

export default nextConfig
