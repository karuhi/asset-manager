/** @type {import('next').NextConfig} */
const env = {
  STARTGG_AUTH_TOKEN: process.env.STARTGG_AUTH_TOKEN,
  STARTGG_API_ENDPOINT: process.env.STARTGG_API_ENDPOINT,
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env,
};

module.exports = nextConfig;
