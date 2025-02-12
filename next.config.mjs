/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            }, 
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ], 
    },
};
 
export default nextConfig;
