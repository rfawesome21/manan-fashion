/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
              pathname: '**',
            },
        ],
    },
    env: {
        STRIPE_API_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY
    }
};

export default nextConfig;
