import { Movie } from "./types"

// Helper functions and variables for the API
const BASE_URL = "https://api.themoviedb.org/3/" 
const BASE_MOVIE_URL = `${BASE_URL}movie/` 

const linkCreator = (
    base: String,
    criteria: String,
    apiKey: String,
    tags: Array<String>
) => {
    const stringTags = `&${tags.join("&")}`
    const url = `${base}${criteria}?api_key=${apiKey}${stringTags}`
    return url
}
const fetcher = function (url: string) {
  return fetch(url).then((res) => res.json())
}
const getResults = async (url: string) => {
    const data = await fetcher(url)
    return data.results
}

// Fetch functions
export const getCriteriaMovies = async (
    maximum: Number = 10,
    page: Number = 1,
    language: String = "en-US",
    criteria: String = "popular"
) => {
    const url = linkCreator(
        BASE_MOVIE_URL,
        criteria,
        process.env.TMDB_API_KEY,
        [`language=${language}`, `page=${page}`]
    )

    const results = await getResults(url)
    return results.slice(0, maximum)
}
export const getMovie = async (id: Number) => {
    const url = linkCreator(
        BASE_MOVIE_URL,
        id.toString(),
        process.env.TMDB_API_KEY,
        []
    )
    const result = await fetcher(url)
    return result
}
export const getMovieImage = (path: String) => {
    return `https://image.tmdb.org/t/p/original${path}`
}
export const getMovieCredits = async (id: Number) => {
    const url = linkCreator(
        BASE_MOVIE_URL,
        `${id}/credits`,
        process.env.TMDB_API_KEY,
        []
    )
    const result = await fetcher(url)
    return result
}
export const searchMovie = async (query: String) => {
    const url = linkCreator(
        BASE_URL,
        "search/movie",
        process.env.TMDB_API_KEY,
        [`query=${query}`]
    )
    console.log(url)
    const result = await getResults(url)
    return result
}
export const getListOfMoviesFromIds = async (ids: Array<Number>) => {
    let movies = []
    for (let i = 0; i < ids.length; i++) {
        const movie = await getMovie(ids[i])
        if(movie.success != false)
            movies.push(movie)
    }
    return movies
}