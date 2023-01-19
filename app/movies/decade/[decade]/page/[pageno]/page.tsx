import Breadcrumbs from "components/Breadcrumbs"
import Movies from "components/Movies"
import Pagination from "components/Pagination"
import getFilterWording from "content/filterWording"
import { getCriteriaMovies, getGenreMovies, getYearMovies } from "helpers/fetch"

export default async function Page({ params }) {
    let { decade, pageno } = params
    pageno = parseInt(pageno)
    const data = await getYearMovies(20, pageno, "en-US", decade)
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
            title: wording.get(decade) || decade,
        },
    ]
    return (
        <div>
            <Breadcrumbs links={links} />
            <Movies data={data} title={wording.get(decade) || decade} />
            <Pagination
                path="/movies/popular"
                page={pageno}
                last={pageno === 10 ? true : false}
            />
        </div>
    )
}
