/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'https://ravalprivate-production.up.railway.app', 'cdn.example.com'], // Adicione 'localhost' e outros domínios conforme necessário
    },
};

export default nextConfig;
