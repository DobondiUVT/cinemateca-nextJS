import { EyeIcon } from "@heroicons/react/24/outline"
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid"
import InfoTabs from "components/Movie/InfoTabs"
import Image from "next/image"
import { getMovieImage } from "helpers/fetch"
import ActionCard from "./ActionCard"

export default function MovieHeader({ movieDetails, movieCredits }) {
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
                    <ActionCard movieDetails={movieDetails} />
                </div>
            </div>
            <div className="container mx-auto"></div>
        </section>
    )
}
