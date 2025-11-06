// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// next.config.js

module.exports = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.crushpixel.com',
      },
      {
        protocol: 'https',
        hostname: 'www.att.com',
      },
    ],
  },
};
