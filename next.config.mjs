/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    env: {
        BACKEND_URL: 'http://127.0.0.1:8000',
    },
  }

export default nextConfig;
