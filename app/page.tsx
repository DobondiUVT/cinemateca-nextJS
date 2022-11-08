import MoviesList from "../components/MoviesList"
import { getMostPopularMovies } from "../helpers/fetch"

export default async function Page() {
    const data = await getMostPopularMovies()
    return (
        <div>
            <div className="text-[64px] text-blue-700 bold">Testing</div>
            <MoviesList movies={data} />
        </div>
    )
}
