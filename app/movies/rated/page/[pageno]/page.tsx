import Pagination from "components/Pagination"
import { getTopRatedMovies } from "helpers/fetch"
import Movies from "components/Movies"

export default async function Page({ params }) {
    let { pageno } = params
    pageno = parseInt(pageno)
    const data = await getTopRatedMovies(20, pageno)
    return (
        <div>
            <Movies data={data} title="Top rated movies" />
            <Pagination
                path="/movies/rated"
                page={pageno}
                last={pageno === 10 ? true : false}
            />
        </div>
    )
}
