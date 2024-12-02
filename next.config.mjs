/** @type {import('next').NextConfig} */
import { config } from 'dotenv';

const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

export default nextConfig
