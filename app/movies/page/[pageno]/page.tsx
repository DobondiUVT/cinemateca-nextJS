import Navbar from "components/Navbar"
import Pagination from "components/Pagination"
import PopularMovies from "components/PopularMovies"
import { getMostPopularMovies } from "helpers/fetch"

export default async function Page({ params }) {
    let { pageno } = params
    pageno = parseInt(pageno)
    const data = await getMostPopularMovies(18, pageno)
    return (
        <div>
            <PopularMovies data={data} />
            <Pagination page={pageno} last={pageno === 10 ? true : false} />
        </div>
    )
}
