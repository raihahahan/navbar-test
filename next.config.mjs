/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mraihan.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
