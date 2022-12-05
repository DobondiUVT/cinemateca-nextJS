import Breadcrumbs from "components/Breadcrumbs"
import Review from "components/Movie/Review"
import getReviews from "content/reviews"
import { getMovie } from "helpers/fetch"

export default async function Page({ params }) {
    const { id } = params
    const movie = await getMovie(id)
    let reviews = getReviews()
    let links = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Movies",
            link: "/movies",
        },
        {
            title: `${movie.title}`,
            link: `/movie/${id}`,
        },
        {
            title: "Reviews",
            link: `/movie/${id}/reviews`,
        },
    ]
    return (
        <section className="py-10">
            <Breadcrumbs links={links} />
            <div className="container mx-auto pt-5">
                <h1 className="text-6xl pb-6">{movie.title} reviews</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {reviews.map((review) => (
                        <Review
                            key={review.id}
                            user={review.user}
                            review={review}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
