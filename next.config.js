/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: true,
  api: {
    externalResolver: true,
  },
};

module.exports = nextConfig;
