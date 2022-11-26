import MovieCard from "./MovieCard"

function asyncComponent<T, R>(
    fn: (arg: T) => Promise<R>
): (arg: T) => R {
    return fn as (arg: T) => R
}

const MoviesList = asyncComponent(
    async ({ movies, gridLayout }: any) => {
        return (
            <div>
                <div className={gridLayout}>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        )
    }
)

export default MoviesList
