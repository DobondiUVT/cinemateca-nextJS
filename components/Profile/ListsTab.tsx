"use client"
import MovieThumbnails from "components/MovieThumbnails"
import { getListOfMoviesFromIds } from "helpers/fetch"
import supabase from "helpers/supabase"
import Image from "next/image"
import { useEffect, useState } from "react"
export default function ListsTab({ profile }) {
    type Combo = { list: any; movies: any[]; user: any }
    type Collection = Combo[]
    const [collections, setCollections] = useState<Collection>([])
    useEffect(() => {
        async function setMovies() {
            let { data: lists, error } = await supabase
                .from("lists")
                .select("*")
                .eq("user", profile.id)
            let collectionOfListsAndMovies = []
            if (lists) {
                for (let list of lists) {
                    let movies = await getListOfMoviesFromIds(list.movies)
                    collectionOfListsAndMovies.push({
                        list: list,
                        movies: movies,
                        user: profile,
                    })
                }
            }
            setCollections(collectionOfListsAndMovies)
            console.log("Here is the collection")
            console.log(collectionOfListsAndMovies)
        }
        setMovies()
    }, [profile])
    let convertTimestampToDate = (timestamp) => {
        let date = new Date(timestamp)
        return date.toLocaleDateString()
    }
    return (
        <section>
            <div className="container mx-auto pt-8 pb-16">
                <h1 className="text-3xl mb-8 font-bold">
                    Here are your lists of movies
                </h1>
                <div className="flex items-center justify-center sm:items-start sm:justify-start flex-wrap gap-6">
                    {collections.map((combo) => (
                        <div key={combo.list.id}>
                            <a
                                href={`/list/${combo.list.id}`}
                                className="block p-6 bg-gray-400 bg-opacity-30 rounded-lg w-fit hover:ring-2 hover:ring-secondary transition-colors"
                            >
                                <h2 className="text-lg mb-3 font-bold">
                                    {combo.list.name}
                                </h2>
                                <div className="flex items-center gap-2 mb-4 font-italic text-sm">
                                    <Image
                                        src={combo.user.avatar_url}
                                        alt="avatar"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                    <span>{combo.user.username}</span>
                                    <span>
                                        {convertTimestampToDate(
                                            combo.list.created_at
                                        )}
                                    </span>
                                </div>

                                <MovieThumbnails movies={combo.movies} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
