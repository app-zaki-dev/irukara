/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // 外部Imageパスを使用する
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'profile.line-scdn.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.stablediffusionapi.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.stablediffusionapi.com',
      },
    ],
    domains: [
      'scdn.line-apps.com',
      'cdn.stablediffusionapi.com',
      'cdn2.stablediffusionapi.com',
    ],
  },
  // サーバー側で使用する環境変数
  env: {
    VERIFY_TOKEN_URL: process.env.VERIFY_TOKEN_URL,
    LINE_USER_PROFILE_URL: process.env.LINE_USER_PROFILE_URL,
    IRUKARA_API_ENDPOINT: process.env.IRUKARA_API_ENDPOINT,
    CLIENT_SITE_URL: process.env.CLIENT_SITE_URL,
  },
};

module.exports = nextConfig;
