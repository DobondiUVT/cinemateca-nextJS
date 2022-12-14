/** @type {import('next').NextConfig} */
const sources = [
    "/movies/popular",
    "/movies/upcoming",
    "/movies/top_rated",
    "/movies/now_playing",
]
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
    experimental: { appDir: true, esmExternals: false },
    // define a remote pattern for TMDB
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
                pathname: "/t/p/**",
            },
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
                port: "",
                pathname: "/**",
            },
        ],
    },
    async redirects() {
        return redirects
    },
}

module.exports = nextConfig
