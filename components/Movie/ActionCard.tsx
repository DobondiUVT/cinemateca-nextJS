"use client"
import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline"
import {EyeIcon as EyeIconSolid} from "@heroicons/react/24/solid"
import {
    BookmarkIcon,
    CheckBadgeIcon,
    PencilIcon,
    StarIcon,
    XCircleIcon,
} from "@heroicons/react/24/solid"
import {
    addToFavorites,
    addToWatched,
    checkIfFavorite,
    checkIfWatched,
    removeFromFavorites,
    removeFromWatched,
} from "helpers/database"
import { useEffect, useState } from "react"
export default function ActionCard({ movieDetails }) {
    const [isFav, setIsFav] = useState(false)
    const [isWatched, setIsWatched] = useState(false)
    const getRatingColor = (rating) => {
        if (rating >= 80) {
            return "bg-green-500"
        } else if (rating >= 60) {
            return "bg-yellow-500"
        } else {
            return "bg-red-500"
        }
    }
    useEffect(() => {
        async function setFavorite() {
            const isFavorite = await checkIfFavorite(movieDetails.id)
            setIsFav(isFavorite)
        }
        setFavorite()
        async function setWatched() {
            const isWatched = await checkIfWatched(movieDetails.id)
            setIsWatched(isWatched)
        }
        setWatched()
    }, [movieDetails.id])

    return (
        <div className="col-span-1 bg-slate-500 rounded-lg bg-opacity-40 p-6 xl:px-10 xl:py-6 text-center flex flex-col items-center justify-start gap-4">
            <div>
                <div
                    className={`text-2xl font-bold flex items-center gap-1 ${getRatingColor(
                        Math.round(movieDetails.vote_average * 10)
                    )} p-4 rounded-md`}
                >
                    {Math.round(movieDetails.vote_average * 10)} / 100
                </div>
            </div>
            <div className="h-[1px] bg-white w-full">&nbsp;</div>
            <div className="flex">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        if (isWatched) {
                            removeFromWatched(movieDetails.id)
                            setIsWatched(false)
                        } else {
                            addToWatched(movieDetails.id)
                            setIsWatched(true)
                        }
                    }}
                    className="flex flex-col gap-1 items-center justify-center font-bold group"
                >
                    {isWatched ? (
                        <>
                        <EyeIconSolid
                            className="group-hover:text-error text-secondary"
                            width="36"
                            height="36"
                        />
                        <span className="flex items-center gap-2 group-hover:text-error">Watched</span>
                        </>

                    ) : (
                        <>
                            <EyeIcon
                                className="group-hover:text-secondary"
                                width="36"
                                height="36"
                            />
                            <span className="group-hover:text-secondary">
                                No watch
                            </span>
                        </>
                    )}
                </a>
            </div>
            <div className="h-[1px] bg-white w-full">&nbsp;</div>
            {isFav ? (
                <a
                    href="#"
                    className="font-bold group"
                    onClick={(e) => {
                        e.preventDefault()
                        removeFromFavorites(movieDetails.id)
                        setIsFav(false)
                    }}
                >
                    <span className="flex items-center gap-2 group-hover:text-error">
                        Added to favorites{" "}
                        <CheckBadgeIcon
                            className="text-yellow-400 group-hover:text-error"
                            width="24"
                            height="24"
                        />
                    </span>
                </a>
            ) : (
                <a
                    href="#"
                    className="flex gap-2 items-center justify-center font-bold hover:text-secondary"
                    onClick={(e) => {
                        e.preventDefault()
                        addToFavorites(movieDetails.id)
                        setIsFav(true)
                    }}
                >
                    Add to favorites{" "}
                    <BookmarkIcon
                        width={24}
                        height={24}
                        className="text-secondary"
                    />
                </a>
            )}

            <div className="h-[1px] bg-white w-full">&nbsp;</div>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault()
                }}
                className="text-md font-bold flex items-center gap-2 group "
            >
                <span className="group-hover:text-secondary">
                    Write a review
                </span>
                <PencilIcon
                    className="group-hover:text-secondary"
                    width={18}
                    height={18}
                />
            </a>
        </div>
    )
}
