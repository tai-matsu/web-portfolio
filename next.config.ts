import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/loading",
        permanent: false,
      }
    ]
  },
};

export default nextConfig;
