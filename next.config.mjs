/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

export default nextConfig
