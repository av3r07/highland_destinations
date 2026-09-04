import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use "@styles/theme.scss" as *;`,
  },
};

export default nextConfig;
