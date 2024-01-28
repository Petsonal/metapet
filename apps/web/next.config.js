/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:"export",
  images:{
    unoptimized : true
  },
  distDir:'build'
}

module.exports = nextConfig
