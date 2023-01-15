"use client"

import Breadcrumbs from "components/Breadcrumbs"
import Link from "next/link"
import { useEffect, useState } from "react"
import supabase from "helpers/supabase"
import { getProfileData, getReviews, getUser, ReviewType } from "helpers/database"
import Review from "./Review"

export default function MovieReviews({ movieId }) {
    let [user, setUser] = useState(null)
    let [review, setReview] = useState("")
    let [rating, setRating] = useState("")
    let [reviews, setReviews] = useState([])
    let [sorting, setSorting] = useState("sort-new")
    let [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
    let checkSubmitState = () => {
        if (review.length > 0 && rating.length > 0) {
            setIsSubmitDisabled(false)
        } else {
            setIsSubmitDisabled(true)
        }
    }
    let submitReview = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase
        .from("reviews")
        .insert([
            { user_id: user.id, text: review, rating: rating, movie_id: movieId },
        ])
        .select()
        console.log(data[0])
        let reviewObject: ReviewType = {
            id: data[0].id,
            user: {
                id: user.id,
                username: user.username,
                avatar: user.avatar_url,
            },
            text: data[0].text,
            likes: data[0].likes,
            dislikes: data[0].dislikes,
            created_at: data[0].created_at,
            rating: data[0].rating,
            movie_id: data[0].movie_id,
        }

        setReviews([reviewObject, ...reviews])
        if (error) console.log("error", error)
        setReview("")
        setRating("")
        setIsSubmitDisabled(true)
    }
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
    useEffect(() => {
        let fetchReviews = async () => {
            let reviews = await getReviews(movieId, 12)
            let sortedReviews = reviews.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            setReviews(sortedReviews)
        }
        let fetchUser = async () => {
            let user = await getProfileData()
            setUser(user)
        }
        fetchReviews()
        fetchUser()
    }, [])
    
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 mb-5">
                        <h2 className="text-3xl whitespace-nowrap mb-0">Members reviews</h2>
                        <select onChange={handleSort} className="select select-bordered select-sm text-xs bg-white text-black w-full max-w-[120px]">
                            <option value="sort-new">New</option>
                            <option value="sort-liked">Liked</option>
                            <option value="sort-disliked">Disliked</option>
                        </select>
                    </div>
                    {reviews.length ? <Link
                        className="hover:text-secondary hover:underline"
                        href={`/movie/${movieId}/reviews`}
                    >
                        See more reviews
                    </Link> : null}
                </div>
                {/* create a text input for writing a review */}
                <form>
                    <div className="w-1/2 flex flex-col gap-2 mb-5 pr-4">
                        <div>
                            <textarea
                                className="textarea h-24 w-full textarea-bordered textarea-secondary placeholder:text-white"
                                placeholder="Write a review..."
                                value={review}
                                onChange={(e) => {setReview(e.target.value); checkSubmitState()}}
                            ></textarea>
                        </div>
                        <div className="flex justify-between">
                            <input
                                className="input input-bordered input-secondary w-1/4 placeholder:text-white"
                                placeholder="Rating out of 100"
                                min="0"
                                max="100"
                                value={rating}
                                onChange={(e) => {setRating(e.target.value); checkSubmitState()}}
                            />
                            <button disabled={isSubmitDisabled} onClick={submitReview} className="btn btn-secondary self-end disabled:border-secondary">Submit</button>
                        </div>
                    </div>
                </form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {reviews.length ? reviews.map((review) => (
                        <Review
                            key={review.id}
                            user={review.user}
                            review={review}
                        />
                    )) : (
                        <p className="text-xl">
                            No reviews yet. Be the first to review this movie!
                            </p>
                            )}
                </div>
            </div>
        </section>
    )
}
