/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mangadex.org',
      },
    ],
  },
  headers: [
    {
      key: 'X-Robots-Tag',
      value: 'noindex',
    },
  ],
}

module.exports = nextConfig
