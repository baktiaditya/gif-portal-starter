const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
};

module.exports = withPlugins(
  [
    [withImages, { inlineImageLimit: 102400 }],
  ],
  nextConfig,
);
