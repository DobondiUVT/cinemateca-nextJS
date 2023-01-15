"use client"
import Breadcrumbs from "components/Breadcrumbs"
import Review from "components/Movie/Review"
import { getProfileData, getReviews, ReviewType } from "helpers/database"
import { getMovie } from "helpers/fetch"
import { useEffect, useState } from "react"

export default function Page({ params }) {
    const { id } = params
    let [movie, setMovie] = useState(null)
    let [reviews, setReviews] = useState([])
    let [user, setUser] = useState(null)
    let [links, setLinks] = useState([])
    let [sorting, setSorting] = useState("sort-new")

    useEffect(() => {
        var setData = async () => {
            const movie = await getMovie(id)
            setMovie(movie)
            const reviews = await getReviews(id)
            setReviews(reviews)
            const user = await getProfileData()
            setUser(user)
            let reviewsObject: ReviewType[] = []
            reviews.forEach((review) => {
                let reviewObject: ReviewType = {
                    id: review.id,
                    user: {
                        id: parseInt(user.id),
                        username: user.username,
                        avatar: user.avatar_url,
                    },
                    text: review.text,
                    likes: review.likes,
                    dislikes: review.dislikes,
                    created_at: review.created_at,
                    rating: review.rating,
                    movie_id: review.movie_id,
                }
                reviewsObject.push(reviewObject)
            })
            setReviews(reviewsObject)
        }
        setData()
    }, [])

    useEffect(() => {
        setLinks([
            {
                title: "Home",
                link: "/",
            },
            {
                title: "Movies",
                link: "/movies",
            },
            {
                title: `${movie && movie.title}`,
                link: `/movie/${id}`,
            },
            {
                title: "Reviews",
                link: `/movie/${id}/reviews`,
            },
        ])
    }, [movie])

    let handleSort = (e) => {
        setSorting(e.target.value)
        if (e.target.value == "sort-new") {
            let sortedReviews = reviews.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            setReviews(sortedReviews)
        } else if (e.target.value == "sort-liked") {
            let sortedReviews = reviews.sort((a, b) => b.likes.length - a.likes.length)
            setReviews(sortedReviews)
        } else if (e.target.value == "sort-disliked") {
            let sortedReviews = reviews.sort((a, b) => b.dislikes.length - a.dislikes.length)
            setReviews(sortedReviews)
        }
    }
    return (
        <section className="py-10">
            <Breadcrumbs links={links} />
            <div className="container mx-auto pt-5">
                <h1 className="text-6xl pb-6">{movie && movie.title} reviews</h1>
                <select onChange={handleSort} className="select select-bordered select-sm text-xs bg-white text-black w-full max-w-[120px] mb-5">
                    <option value="sort-new">New</option>
                    <option value="sort-liked">Liked</option>
                    <option value="sort-disliked">Disliked</option>
                </select>
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
