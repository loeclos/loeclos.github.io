/** @type {import('next').NextConfig} */
// const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
    images: {
        unoptimized: true,
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
    output: 'export',
    // basePath: isGithubPages ? '/' : '',

};
 
export default nextConfig;
