import Pagination from "components/Pagination"
import PopularMovies from "components/PopularMovies"
import Navbar from "../../components/Navbar"
import { getMostPopularMovies } from "../../helpers/fetch"

export default async function Page() {
    const data = await getMostPopularMovies(18)
    return (
        <div>
            <PopularMovies data={data} />
            <Pagination page={1} last={false} />
        </div>
    )
}
