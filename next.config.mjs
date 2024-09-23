/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
};

async () => {
  return [
    {
      source: "/login",
      destination: "/", 
      permanent: false,
    },
  ];
};

export default nextConfig;
