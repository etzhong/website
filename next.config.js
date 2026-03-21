const path = require("path");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
};

module.exports = withContentlayer(nextConfig);
