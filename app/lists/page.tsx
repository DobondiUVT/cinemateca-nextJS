import Movies from "components/Movies"
import MovieThumbnails from "components/MovieThumbnails"
import { getListOfMoviesFromIds, getMovie } from "helpers/fetch"
import supabase from "helpers/supabase"

export default async function Page() {
    let { data: lists, error } = await supabase.from("lists").select("*")
    type Combo = { list: any; movies: any[] }
    type Collection = Combo[]
    async function setMovies() {
        let collectionOfListsAndMovies = []
        for (let list of lists) {
            let movies = await getListOfMoviesFromIds(list.movies)
            collectionOfListsAndMovies.push({ list: list, movies: movies })
        }
        return collectionOfListsAndMovies
    }
    const collectionOfListsAndMovies: Collection = await setMovies()
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h1 className="text-3xl mb-8">Popular members lists</h1>
                {collectionOfListsAndMovies.map((combo) => (
                    <a
                        key={combo.list.id}
                        href={`/list/${combo.list.id}`}
                        className="block mb-6 p-6 bg-gray-400 bg-opacity-30 rounded-lg w-fit hover:ring-2 hover:ring-secondary transition-colors"
                    >
                        <h2 className="text-lg mb-3">{combo.list.name}</h2>
                        <MovieThumbnails movies={combo.movies} />
                    </a>
                ))}
            </div>
        </section>
    )
}
