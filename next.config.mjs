/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Facilitates static exports and simple local file routing
  },
};

export default nextConfig;
