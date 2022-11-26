import { CalendarIcon, EyeIcon } from "@heroicons/react/24/outline"
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid"
import InfoTabs from "components/Movie/InfoTabs"
import { getMovie, getMovieCredits, getMovieImage } from "helpers/fetch"
import { Credits, Movie } from "helpers/types"
import Image from "next/image"

export default async function Page({ params }) {
    const { id } = params
    const movieDetails: Movie = await getMovie(id)
    const movieCredits: Credits = await getMovieCredits(id)
    return (
        <div className="pb-40">
            <div className="relative min-w-full h-[60vh]">
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
                <div className="grid grid-cols-4 gap-10 items-start">
                    <div className="aspect-[2/3] relative rounded-md border border-gray-600 col-span-1">
                        <Image
                            className="object-cover object-top z-0 rounded-md"
                            src={getMovieImage(movieDetails.poster_path)}
                            fill
                            alt={movieDetails.title}
                        />
                    </div>
                    <div className="col-span-2">
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
                        <InfoTabs movieDetails={movieDetails} movieCredits={movieCredits}/>
                    </div>
                    <div className="col-span-1 bg-slate-500 rounded-lg bg-opacity-40 p-6 xl:p-10 text-center flex flex-col items-center justify-start gap-4">
                        <div>
                            <p className="text-2xl font-bold text-gray-200 flex items-center gap-1">
                                {Array.from(
                                    {
                                        length: Math.round(
                                            movieDetails.vote_average / 2
                                        ),
                                    },
                                    (_, i) => (
                                        <StarIcon
                                            key={i}
                                            className="h-10 w-10 text-primary"
                                        />
                                    )
                                )}
                            </p>
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
        </div>
    )
}
