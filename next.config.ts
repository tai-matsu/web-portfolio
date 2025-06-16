import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/preloader",
        permanent: false,
      }
    ]
  },
};

export default nextConfig;
