import Breadcrumbs from "components/Breadcrumbs"
import Movies from "components/Movies"
import Pagination from "components/Pagination"
import { getCriteriaMovies, searchMovie } from "helpers/fetch"

export default async function Page({ params }) {
    let { key } = params
    const data = await searchMovie(key)
    const links = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Search",
        },
    ]
    return (
        <div>
            <Breadcrumbs links={links} />
            <Movies data={data} title="Results for your search:" />
        </div>
    )
}
