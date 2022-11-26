import MoviesList from "./MoviesList"

export default function Movies({ data, title }) {
    return (
        <section className="container mx-auto py-6">
            <h1 className="text-3xl pt-4 pb-10 ">{title}</h1>
            <MoviesList
                movies={data}
                // gridLayout="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                gridLayout="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            />
        </section>
    )
}
