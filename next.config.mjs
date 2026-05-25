/** @type {import('next').NextConfig} */
const nextConfig = {
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