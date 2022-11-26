import Image from "next/image"
import Link from "next/link"

export default function MovieCard({ movie }) {
    return (
        //create a card in tailwind
        <Link href={`/movie/${movie.id}`} className="rounded-md border border-gray-600  transition-colors hover:border-2 hover:border-secondary aspect-[2/3] max-h-[320px]">
            <div className="flex flex-col">
                <div className="relative aspect-[2/3]">
                    {movie.poster_path ? (
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            fill
                            alt={`Poster for ${movie.title}`}
                            className="rounded-md"
                        />
                    ) : (
                        <span>Poster not found</span>
                    )}
                </div>
            </div>
        </Link>
    )
}
