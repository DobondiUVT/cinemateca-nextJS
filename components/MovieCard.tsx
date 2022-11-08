import Image from "next/image"

export default function MovieCard({ movie }) {
    return (
        //create a card in tailwind
        <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-64 h-96">
                {movie.poster_path ? (
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        fill
                        alt={`Poster for ${movie.title}`}
                    />
                ) : (
                    <div>Poster not found</div>
                )}
            </div>
            <div className="flex flex-col items-center justify-center w-full h-32 p-4">
                <div className="text-xl font-bold">{movie.title}</div>
                <div className="text-lg">{movie.release_date}</div>
            </div>
        </div>
    )
}
