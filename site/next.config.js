/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Norosm Base',
    description: 'The basic image for daily use.',
    icon: '/img/logo.svg',
    listUrl: 'https://sepzilla.github.io/qvbuntu/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/qvbuntu/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
