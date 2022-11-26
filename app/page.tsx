import Benefits from "../components/Benefits"
import Hero from "../components/Hero"
import MoviesList from "../components/MoviesList"
import Navbar from "../components/Navbar"
import { getMostPopularMovies } from "../helpers/fetch"

export default async function Page() {
    // const data = await getMostPopularMovies()
    // <MoviesList movies={data} />
    return (
        <div>
            <Hero />
            <Benefits />
        </div>
    )
}
