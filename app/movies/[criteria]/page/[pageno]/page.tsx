import Breadcrumbs from "components/Breadcrumbs"
import Movies from "components/Movies"
import Pagination from "components/Pagination"
import getFilterWording from "content/filterWording"
import { getCriteriaMovies, getMostPopularMovies } from "helpers/fetch"

export default async function Page({ params }) {
    let { criteria, pageno } = params
    pageno = parseInt(pageno)
    const data = await getCriteriaMovies(20, pageno, "en-US", criteria)
    const wording = getFilterWording()
    const links = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Movies",
            link: "/movies",
        },
        {
            title: wording.get(criteria) || criteria,
        },
    ]
    return (
        <div>
            <Breadcrumbs links={links} />
            <Movies data={data} title={wording.get(criteria) || criteria} />
            <Pagination
                path="/movies/popular"
                page={pageno}
                last={pageno === 10 ? true : false}
            />
        </div>
    )
}
