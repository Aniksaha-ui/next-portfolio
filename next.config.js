/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow images from localhost and 127.0.0.1 (for local development)
    domains: ["127.0.0.1", "localhost"],

    // Use remotePatterns to specify an external image domain
    remotePatterns: [
      {
        protocol: "https", // Use HTTPS for secure requests
        hostname: "*", // External image domain
        port: "", // Default port for HTTPS
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    // Disable type checking during build. Useful if you don't want to block builds with TypeScript errors.
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },
};

module.exports = nextConfig;
