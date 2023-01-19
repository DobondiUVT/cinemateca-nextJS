import { getListOfMoviesFromIds } from "./fetch"
import { Profile } from "types/db_types"
import supabase from "./supabase"

export async function getUser() {
    const {
        data: { user },
    } = await supabase.auth.getUser()
    return user
}
export async function getProfileData() {
    const user = await getUser()
    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single()
    return profile as Profile
}
export async function getProfileDataById(id) {
    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single()
    return profile as Profile
}
export async function getAllProfileData() {
    const { data: profiles } = await supabase.from("profiles").select("*")
    return profiles as Profile[]
}
export async function checkIfFavorite(movieId) {
    const profile = await getProfileData()
    const favorites = profile?.fav_movies
    if (favorites) {
        return favorites.includes(movieId)
    }
    return false
}
export async function addToFavorites(movieId) {
    const profile = await getProfileData()
    let favorites = profile.fav_movies
    if (favorites) {
        favorites.push(movieId)
    } else {
        favorites = [movieId]
    }
    const { data, error } = await supabase
        .from("profiles")
        .update({ fav_movies: favorites })
        .eq("id", profile.id)
    if (error) {
        console.log(error)
    }
}
export async function removeFromFavorites(movieId) {
    const profile = await getProfileData()
    let favorites = profile.fav_movies
    if (favorites) {
        favorites = favorites.filter((id) => id !== movieId)
    }
    const { data, error } = await supabase
        .from("profiles")
        .update({ fav_movies: favorites })
        .eq("id", profile.id)
    if (error) {
        console.log(error)
    }
}
export async function checkIfWatched(movieId) {
    const profile = await getProfileData()
    const watched = profile?.watched
    if (watched) {
        return watched.includes(movieId)
    }
    return false
}
export async function addToWatched(movieId) {
    const profile = await getProfileData()
    let watched = profile.watched
    if (watched) {
        watched.push(movieId)
    } else {
        watched = [movieId]
    }
    const { data, error } = await supabase
        .from("profiles")
        .update({ watched: watched })
        .eq("id", profile.id)
    if (error) {
        console.log(error)
    }
}
export async function removeFromWatched(movieId) {
    const profile = await getProfileData()
    let watched = profile.watched
    if (watched) {
        watched = watched.filter((id) => id !== movieId)
    }
    const { data, error } = await supabase
        .from("profiles")
        .update({ watched: watched })
        .eq("id", profile.id)
    if (error) {
        console.log(error)
    }
}
export async function getNumberOfMoviesWatched(id = "") {
    if (!id) {
        const profile = await getProfileData()
        id = profile.id
    }
    const { data, error } = await supabase
        .from("profiles")
        .select("watched")
        .eq("id", id)
        .single()
    if (error) {
        console.log(error)
    }
    return data?.watched ? data?.watched.length : 0
}
export async function getWatchedMovies(id = "") {
    if (!id) {
        const profile = await getProfileData()
        console.log(profile)
        id = profile?.id
    }
    const { data, error } = await supabase
        .from("profiles")
        .select("watched")
        .eq("id", id)
        .single()
    if (error) {
        console.log(error)
    }
    return await getListOfMoviesFromIds(data?.watched)
}
export type ReviewType = {
    id: number,
    user: {
        id: string,
        username: string,
        avatar: string,
    },
    text: string,
    likes: number[],
    dislikes: number[],
    created_at: string,
    rating: number,
    movie_id: string
}
export async function getReviews(movie_id, limit = 10000) {
    
    const { data: db_reviews } = await supabase
        .from("reviews")
        .select("*")
        .eq("movie_id", movie_id)
        .order("created_at", { ascending: false })
        .limit(limit)
    let reviews: ReviewType[] = []
    for (const review of db_reviews) {
        let user = await getProfileDataById(review.user_id)
        reviews.push({
            id: review.id,
            user: {
                id: user.id,
                username: user.username,
                avatar: user.avatar_url,
            },
            text: review.text,
            likes: review.likes,
            dislikes: review.dislikes,
            created_at: review.created_at,
            rating: review.rating,
            movie_id: review.movie_id,
        })
    }
    return reviews as ReviewType[]
}
