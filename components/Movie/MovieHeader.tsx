import { EyeIcon } from "@heroicons/react/24/outline"
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid"
import InfoTabs from "components/Movie/InfoTabs"
import Image from "next/image"
import { getMovieImage } from "helpers/fetch"

export default function MovieHeader({ movieDetails, movieCredits }) {
    const createStars = (rating: number) => {
        let starIterations = [0, 0, 0, 0, 0]
        for (let i = 0; i < rating; i++) {
            starIterations[i] = 1
        }
        if (Math.floor(rating) !== rating) {
            starIterations[Math.floor(rating)] = 0.5
        }
        for (let i = rating; i < 4; i++) {
            starIterations[i] = 0
        }
        return starIterations
    }
    const starIterations = createStars(
        Math.round(movieDetails.vote_average) / 2
    )
    return (
        <section className="pb-12">
            <div className="relative min-w-full h-[40vh] lg:h-[60vh]">
                <Image
                    className="object-cover object-top z-0"
                    src={getMovieImage(movieDetails.backdrop_path)}
                    fill
                    alt={movieDetails.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-base-100 z-[1] opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent  to-base-100 z-[1] opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-base-100 z-[1] opacity-50"></div>
            </div>
            <div className="mt-[-160px] relative z-10 container mx-auto">
                <div className="grid grid-cols lg:grid-cols-4 gap-10 items-start">
                    <div className="aspect-[2/3] w-[320px] lg:w-[unset] relative rounded-md border border-gray-600 col-span-1 mx-auto lg:mx-[unset]">
                        <Image
                            className="object-cover object-top z-0 rounded-md"
                            src={getMovieImage(movieDetails.poster_path)}
                            fill
                            alt={movieDetails.title}
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <h1 className="font-serif">{movieDetails.title}</h1>
                        <div className="flex gap-4 pt-2 pb-3">
                            <p className="text-md text-gray-400 font-serif">
                                {movieDetails.release_date.slice(0, 4)}
                            </p>
                            <p className="text-md text-gray-400 font-serif">
                                {movieDetails.runtime} minutes
                            </p>
                            <p className="text-md text-gray-400 font-serif">
                                Directed by{" "}
                                <span className="font-bold underline text-gray-400">
                                    {movieCredits.crew[0].name}
                                </span>
                            </p>
                        </div>
                        <p className="max-w-[65ch] text-gray-200">
                            {movieDetails.overview}
                        </p>
                        <div className="py-3"></div>
                        <InfoTabs
                            movieDetails={movieDetails}
                            movieCredits={movieCredits}
                        />
                    </div>
                    <div className="col-span-1 bg-slate-500 rounded-lg bg-opacity-40 p-6 xl:p-10 text-center flex flex-col items-center justify-start gap-4">
                        <div>
                            <div className="text-2xl font-bold text-gray-200 flex items-center gap-1">
                                {starIterations.map((star, index) => {
                                    if (star === 1) {
                                        return (
                                            <StarIcon
                                                key={index}
                                                className="w-8 h-8 text-yellow-400"
                                            />
                                        )
                                    } else if (star === 0.5) {
                                        return (
                                            <div
                                                key={index}
                                                className="relative"
                                            >
                                                <StarIcon className="w-8 h-8 text-gray-400" />
                                                <div className="absolute left-0 top-0 bottom-0 w-[50%] overflow-hidden">
                                                    <StarIcon className="text-yellow-400 w-8 h-8" />
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <StarIcon
                                                key={index}
                                                className="w-8 h-8 text-gray-400"
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className="h-[1px] bg-white w-full">&nbsp;</div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-1 items-center justify-center font-bold">
                                <EyeIcon width="36" height="36" />
                                Watched
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center font-bold">
                                <HeartIcon
                                    className="text-secondary"
                                    width="36"
                                    height="36"
                                />
                                Liked
                            </div>
                        </div>
                        <div className="h-[1px] bg-white w-full">&nbsp;</div>
                        <div className="text-md font-bold">
                            Add to favorites
                        </div>
                        <div className="h-[1px] bg-white w-full">&nbsp;</div>
                        <div className="text-md font-bold">Write a review</div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto"></div>
        </section>
    )
}
