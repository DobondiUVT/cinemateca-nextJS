/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    reactStrictMode: true,
    experimental: { appDir: true },
    // define a remote pattern for TMDB
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
                pathname: "/t/p/w500/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/movies/page",
                destination: "/movies/page/1",
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
