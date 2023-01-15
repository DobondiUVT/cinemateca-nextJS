"use client"
import Image from "next/image"
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import supabase from "helpers/supabase"
import { getProfileData } from "helpers/database"

export default function Review({ user, review }) {
    let [likes, setLikes] = useState(review.likes)
    let [dislikes, setDislikes] = useState(review.dislikes)
    let [numberOfLikes, setNumberOfLikes] = useState(likes.length)
    let [numberOfDislikes, setNumberOfDislikes] = useState(dislikes.length)
    let [liked, setLiked] = useState(false)
    let [disliked, setDisliked] = useState(false)
    let [currentUser, setCurrentUser] = useState(null)
    
    const getRatingColor = (rating) => {
        if (rating >= 80) {
            return "bg-green-500"
        } else if (rating >= 60) {
            return "bg-yellow-500"
        } else {
            return "bg-red-500"
        }
    }
    

    const handleLike = () => {
        if (liked) {
            setLiked(false)
            setNumberOfLikes(numberOfLikes - 1)
            setLikes(likes.filter((like) => like !== currentUser))
            console.log(likes.filter((like) => like !== currentUser))
            console.log(likes)
        } else {
            setLiked(true)
            setNumberOfLikes(numberOfLikes + 1)
            setLikes([...likes, currentUser])
            if (disliked) {
                setDisliked(false)
                setNumberOfDislikes(numberOfDislikes - 1)
                setDislikes(dislikes.filter((dislike) => dislike !== currentUser))
            }
        }
    }
    const handleDislike = () => {
        if (disliked) {
            setDisliked(false)
            setNumberOfDislikes(numberOfDislikes - 1)
            setDislikes(dislikes.filter((dislike) => dislike !== currentUser))
        } else {
            setDisliked(true)
            setNumberOfDislikes(numberOfDislikes + 1)
            setDislikes([...dislikes, currentUser])
            if (liked) {
                setLiked(false)
                setNumberOfLikes(numberOfLikes - 1)
                setLikes(likes.filter((like) => like !== currentUser))
            }
        }
    }
    const checkIfAlreadyVoted = async () => {
        if (likes.includes(currentUser)) {
            setLiked(true)
        } else if (dislikes.includes(currentUser)) {
            setDisliked(true)
        }
    }
    useEffect(() => {
        const getUser = async () => {
            const user = await getProfileData()
            setCurrentUser(user.id)
        }
        getUser()
        checkIfAlreadyVoted()
    }, [currentUser])
    
    useEffect(() => {
        const updateDatabase = async () => {
            const { data, error } = await supabase
                .from("reviews")
                .update({ likes: likes, dislikes: dislikes })
                .eq("id", review.id)
                .select()
            if (error) console.log("error", error)
            if (data) console.log("data", data)
        }
        updateDatabase()
    }, [likes, dislikes])

    return (
        <div className="bg-slate-700 rounded-lg flex flex-col  border-slate-600 shadow-xl">
            <div className="flex flex-col gap-2 p-6 flex-1">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src={user.avatar}
                                alt={user.username}
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{user.username}</h3>
                            <p className="text-gray-400 text-sm">
                                {new Date(review.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <div className={`${getRatingColor(review.rating)} flex items-center justify-center px-4 py-2 rounded-lg text-lg font-bold`}>
                        {review.rating}
                    </div>
                </div>
                <p className="text-gray-200">{review.text}</p>
            </div>
            <div className="bg-slate-800 px-6 py-3 rounded-b-lg">
                <div className="flex items-center justify-end gap-3">
                    <button className={`btn border-black btn-sm btn-error gap-2 flex items-center dislike-button ${disliked == true ? "bg-error" : "bg-black"}`} onClick={handleDislike}>
                        <HandThumbDownIcon color="white" width={16}/>
                        <div className="normal-case">Disagree</div>
                        <div className="w-[1px] bg-gray-400">&nbsp;</div>
                        <div>{numberOfDislikes}</div>
                    </button>
                    <button className={`btn border-black btn-sm btn-secondary gap-2 flex items-center like-button ${liked == true ? "bg-secondary" : "bg-black"}`} onClick={handleLike}>
                        <HandThumbUpIcon color="white" width={16}/>
                        <div className="normal-case">Agree</div>
                        <div className="w-[1px] bg-gray-400">&nbsp;</div>
                        <div>{numberOfLikes}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
