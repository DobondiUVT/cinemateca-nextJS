import Breadcrumbs from "components/Breadcrumbs"
import Movies from "components/Movies"
import { getListOfMoviesFromIds } from "helpers/fetch"
import supabase from "helpers/supabase"
import Image from "next/image"

export default async function Page({ params }) {
    const { listId } = params
    var { data: lists, error } = await supabase
        .from("lists")
        .select("*")
        .eq("id", listId)
    let listOfIds = lists[0].movies
    let userId = lists[0].user
    var { data: profiles, error } = await supabase
        .from("profiles")
        .select("username, avatar_url")
        .eq("id", userId)
    let movies = await getListOfMoviesFromIds(listOfIds)
    let links = [
        {
            link: "/",
            title: "Home",
        },
        {
            link: "/lists",
            title: "Lists",
        },
        {
            link: `/list/${listId}`,
            title: lists[0].name,
        },
    ]
    let convertTimestampToDate = (timestamp) => {
        let date = new Date(timestamp)
        return date.toLocaleDateString()
    }
    return (
        <section>
            <Breadcrumbs links={links} />
            <div className="container mx-auto pt-8">
                <h1 className="text-3xl mb-4 font-bold">{lists[0].name}</h1>

                <div className="flex items-center gap-4">
                    A list created by
                    <h2 className="text-lg font-bold">
                        {profiles[0].username}
                    </h2>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src={profiles[0].avatar_url}
                            alt="avatar"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <div>
                    Created: {convertTimestampToDate(lists[0].created_at)}
                </div>
            </div>
            <Movies data={movies} />
        </section>
    )
}
