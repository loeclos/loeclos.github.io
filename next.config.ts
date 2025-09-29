import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loeclos.github.io',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                port: '',
                pathname: '**',
            }
        ],
        unoptimized: true,
    },
};



export default nextConfig;
