/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plantpure.in",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;