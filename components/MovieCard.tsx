import Image from "next/image"
import Link from "next/link"
export default function MovieCard({ movie }) {

    return (
        <Link
            href={`/movie/${movie.id}`}
            className="rounded-md border border-gray-600 transition-colors hover:border-2 hover:border-secondary aspect-[2/3] max-h-[380px] bg-gray-800 tooltip tooltip-primary"
            data-tip={`${movie.title} (${movie.release_date?.slice(0, 4)}) ${
                movie.vote_average ? movie.vote_average + "/10" : ""
            }`}
        >
            <div className="flex flex-col">
                <div className="relative aspect-[2/3]">
                    {movie.poster_path ? (
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            fill
                            alt={`Poster for ${movie.title}`}
                            className="rounded-md"
                            sizes="(max-width: 768px) 50vw,
                            (max-width: 1200px) 25vw"
                        />
                    ) : (
                        <Image 
                            src="/card-holder.png"
                            fill
                            className="rounded-md object-cover"
                            alt="Placeholder for movie poster"
                        />
                    )}
                </div>
            </div>
        </Link>
    )
}
