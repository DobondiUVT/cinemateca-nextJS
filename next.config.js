/** @type {import('next').NextConfig} */
const sources = ["/movies/popular", "/movies/rated"]
let redirects = []
sources.forEach((source) => {
    redirects.push({
        source: source,
        destination: `${source}/page/1`,
        permanent: true,
    })
    redirects.push({
        source: `${source}/page`,
        destination: `${source}/page/1`,
        permanent: true,
    })
})
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
        return redirects
    },
}

module.exports = nextConfig
