/** @type {import('next').NextConfig} */
const sources = [
    "/movies/popular",
    "/movies/upcoming",
    "/movies/top_rated",
    "/movies/now_playing",
    "/movies/genre/action",
    "/movies/genre/adventure",
    "/movies/genre/animation",
    "/movies/genre/comedy",
    "/movies/genre/documentary",
    "/movies/genre/drama",
    "/movies/genre/horror",
    "/movies/decade/2020s",
    "/movies/decade/2010s",
    "/movies/decade/2000s",
    "/movies/decade/1990s",
    "/movies/decade/1980s",
    "/movies/decade/1970s"
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
