const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
};

module.exports = withContentlayer(nextConfig);
