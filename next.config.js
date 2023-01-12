/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
