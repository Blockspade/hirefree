/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivityPosition: "bottom-right", // Controls build indicator placement
  },
  compiler: {
    styledComponents: true, // Enable styled-components optimization if needed
  },
  onDemandEntries: {
    // Make sure development entries are not cached for too long
    maxInactiveAge: 60 * 60 * 1000,
  },
  experimental: {
    disableDevRuntimeErrorOverlay: true, // This will disable the runtime error overlay in dev
  },
};

export default nextConfig;
