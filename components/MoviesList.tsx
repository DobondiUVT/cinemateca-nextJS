import { asyncComponent } from "helpers/functions"
import MovieCard from "./MovieCard"

export default function MoviesList({ movies, gridLayout }: any) {
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
