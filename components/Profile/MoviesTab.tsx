import Movies from "components/Movies"
import { getListOfMoviesFromIds } from "helpers/fetch"
import { useEffect, useState } from "react"
export default function MoviesTab({ profile }) {
    const movieIds = profile.fav_movies
    const [movies, setMovies] = useState(null)
    useEffect(() => {
        async function createList() {
            if (movieIds) {
                setMovies(await getListOfMoviesFromIds(movieIds))
            }
        }
        createList()
    }, [movieIds])
    if (!movieIds) {
        return <div className="text-center">No movies added yet</div>
    }
    return (
        <div>
            {movies && <Movies data={movies} title="Favorite movies" />}
        </div>
    )
}
