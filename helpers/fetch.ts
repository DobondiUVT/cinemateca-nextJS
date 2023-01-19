import { Movie } from "../types/types"

// Helper functions and variables for the API
const BASE_URL = "https://api.themoviedb.org/3/" 
const BASE_MOVIE_URL = `${BASE_URL}movie/` 
const DISCOVER_MOVIE = `${BASE_URL}/`
const genreToID = {
    "action": 28,
    "adventure": 12,
    "animation": 16,
    "comedy": 35,
    "crime": 80,
    "documentary": 99,
    "drama": 18,
    "family": 10751,
    "fantasy": 14,
    "history": 36,
    "horror": 27,
    "music": 10402,
    "mystery": 9648,
}
const decadeToYears = {
    "2020s": [2020, 2021],
    "2010s": [2010, 2019],
    "2000s": [2000, 2009],
    "1990s": [1990, 1999],
    "1980s": [1980, 1989],
    "1970s": [1970, 1979],
    "1960s": [1960, 1969],
    "1950s": [1950, 1959],
}
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
        process.env.NEXT_PUBLIC_TMDB_API_KEY,
        [`language=${language}`, `page=${page}`]
    )

    const results = await getResults(url)
    return results.slice(0, maximum)
}
export const getGenreMovies = async (
    maximum: Number = 10,
    page: Number = 1,
    language: String = "en-US",
    genre: string = "action"
) => {
    const url = linkCreator(
        DISCOVER_MOVIE,
        "discover/movie",
        process.env.NEXT_PUBLIC_TMDB_API_KEY,
        [`language=${language}`, `page=${page}`, `with_genres=${genreToID[genre]}`]
    )
    console.log(url)
    const results = await getResults(url)
    return results.slice(0, maximum)
}
export const getYearMovies = async (
    maximum: Number = 10,
    page: Number = 1,
    language: String = "en-US",
    year: string = "2020s"
) => {
    const url = linkCreator(
        DISCOVER_MOVIE,
        "discover/movie",
        process.env.NEXT_PUBLIC_TMDB_API_KEY,
        [`language=${language}`, `page=${page}`, `primary_release_date.gte=${decadeToYears[year][0]}-01-01`, `primary_release_date.lte=${decadeToYears[year][1]}-12-31`]
    )
    const results = await getResults(url)
    return results.slice(0, maximum)
}
export const getMovie = async (id: Number) => {
    const url = linkCreator(
        BASE_MOVIE_URL,
        id.toString(),
        process.env.NEXT_PUBLIC_TMDB_API_KEY,
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
        process.env.NEXT_PUBLIC_TMDB_API_KEY,
        []
    )
    const result = await fetcher(url)
    return result
}
export const searchMovie = async (query: String) => {
    const url = linkCreator(
        BASE_URL,
        "search/movie",
        process.env.NEXT_PUBLIC_TMDB_API_KEY,
        [`query=${query}`]
    )
    console.log(url)
    const result = await getResults(url)
    return result
}
export const getListOfMoviesFromIds = async (ids: Array<Number>) => {
    let movies = []
    if (ids) {
        for (let i = 0; i < ids.length; i++) {
            const movie = await getMovie(ids[i])
            if(movie.success != false)
                movies.push(movie)
        }
    }
    return movies
}