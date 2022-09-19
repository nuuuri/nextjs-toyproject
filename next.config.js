/** @type {import('next').NextConfig} */

const withImages = require("next-images");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withImages(nextConfig);
