import Movies from "components/Movies"
import { getListOfMoviesFromIds } from "helpers/fetch"
import supabase from "helpers/supabase"

export default async function Page({ params }) {
    const { listId } = params
    let { data: lists, error } = await supabase
        .from("lists")
        .select("*")
        .eq("id", listId)
    let listOfIds = lists[0].movies
    let movies = await getListOfMoviesFromIds(listOfIds)
    return <Movies data={movies} title={`${lists[0].name ?? ""}`} />
}
