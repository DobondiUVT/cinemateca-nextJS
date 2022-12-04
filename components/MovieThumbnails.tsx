import Image from "next/image"
function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}
export default function MovieThumbnails({ movies }) {
    if (movies.length > 5) {
        movies = movies.slice(0, 5)
    } else {
        movies = [...movies, ...Array(5 - movies.length).fill(null)]
    }
    return (
        <div className="flex relative">
            {movies.map((movie, index) => (
                <div
                    key={index}
                    className={classNames(
                        "relative aspect-[2/3] border border-gray-600 rounded-md h-[160px]",
                        index > 0 ? "ml-[-40px]" : ""
                    )}
                    style={{ zIndex: movies.length - index }}
                >
                    {movie?.poster_path ? (
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            fill
                            alt={`Poster for ${movie.title}`}
                            className="rounded-md"
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
            ))}
        </div>
    )
}
