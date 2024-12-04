/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : false,
    // trailingSlash: true,
    images: {
        unoptimized: true,
        domains: ['marineplaza.org'],
    },
};

export default nextConfig;
