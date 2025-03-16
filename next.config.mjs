/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["localhost", "images.ctfassets.net", "blanik.me"],
  },
};

export default nextConfig;
