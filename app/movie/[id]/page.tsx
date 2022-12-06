import MovieHeader from "components/Movie/MovieHeader"
import { Credits, Movie } from "types/types"
import { getMovie, getMovieCredits } from "helpers/fetch"
import MovieReviews from "components/Movie/MovieReviews"

export default async function Page({ params }) {
    const { id } = params
    const movieDetails: Movie = await getMovie(id)
    const movieCredits: Credits = await getMovieCredits(id)

    return (
        <div className="pb-40">
            <MovieHeader
                movieDetails={movieDetails}
                movieCredits={movieCredits}
            />
            <MovieReviews movieId={id} />
        </div>
    )
}
