import Breadcrumbs from "components/Breadcrumbs"
import getReviews from "content/reviews"
import Link from "next/link"
import Review from "./Review"

export default function MovieReviews({ movieId }) {
    let reviews = getReviews().slice(0, 6)
    
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-3xl mb-5">Members reviews</h2>
                    <Link
                        className="hover:text-secondary hover:underline"
                        href={`/movie/${movieId}/reviews`}
                    >
                        See more reviews
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-10">
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
