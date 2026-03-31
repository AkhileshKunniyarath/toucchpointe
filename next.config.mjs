import path from "path";

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("."),
    };

    return config;
  },
};

export default nextConfig;
