"use client"
import Movies from "components/Movies"
import { getWatchedMovies } from "helpers/database"
import { useEffect, useState } from "react"
export default function Page() {
    // show all watched movies
    const [movies, setMovies] = useState(null)
    useEffect(() => {
        const takeMovies = async () => {
            const movies = await getWatchedMovies()
            setMovies(movies?.length ? movies.reverse() : null)
        }
        takeMovies()
    }, [])

    return (
        <div>
            {movies ? (
                <Movies data={movies} title="Films you have seen lately" />
            ) : (
                <div className="container mx-auto">
                    <h1 className="text-2xl py-6">No movies watched yet</h1>
                </div>
            )}
        </div>
    )
}
