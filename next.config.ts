import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/jeune",
        destination: "/savoir/jeune",
        permanent: true,
      },
      {
        source: "/zakat",
        destination: "/savoir/zakat",
        permanent: true,
      },
      {
        source: "/purification",
        destination: "/savoir/purification",
        permanent: true,
      },
      {
        source: "/plus",
        destination: "/settings",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
