import Breadcrumbs from "components/Breadcrumbs"
import Movies from "components/Movies"
import Pagination from "components/Pagination"
import getFilterWording from "content/filterWording"
import { getCriteriaMovies, getGenreMovies } from "helpers/fetch"

export default async function Page({ params }) {
    let { genre, pageno } = params
    pageno = parseInt(pageno)
    const data = await getGenreMovies(20, pageno, "en-US", genre)
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
            title: wording.get(genre) || genre,
        },
    ]
    return (
        <div>
            <Breadcrumbs links={links} />
            <Movies data={data} title={wording.get(genre) || genre} />
            <Pagination
                path="/movies/popular"
                page={pageno}
                last={pageno === 10 ? true : false}
            />
        </div>
    )
}
