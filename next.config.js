/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  strictMode: true,
  images: {
    domains: [""],
    loader: 'imgix',
    path: '/',
  },
  // experimental: {
  //     images: {
  //         unoptimized: true
  //     }
  // },
};

module.exports = withPlugins([
  [optimizedImages, {}],
], nextConfig);
