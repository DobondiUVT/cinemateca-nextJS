import Movies from "components/Movies"
import Pagination from "components/Pagination"
import { getMostPopularMovies } from "helpers/fetch"

export default async function Page({ params }) {
    let { pageno } = params
    pageno = parseInt(pageno)
    const data = await getMostPopularMovies(20, pageno)
    return (
        <div>
            <Movies data={data} title="Most popular movies" />
            <Pagination
                path="/movies/popular"
                page={pageno}
                last={pageno === 10 ? true : false}
            />
        </div>
    )
}
