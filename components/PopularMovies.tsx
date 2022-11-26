import MoviesList from "./MoviesList"

export default function PopularMovies({ data }) {
    return (
        <section className="container mx-auto py-6">
            <h1 className="text-3xl py-10">Most popular movies</h1>
            <MoviesList
                movies={data}
                gridLayout="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            />
        </section>
    )
}
