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
export const getMostPopularMovies = async (
    maximum: Number = 10,
    page: Number = 1,
    language: String = "en-US"
) => {
    const url = linkCreator(
        BASE_MOVIE_URL,
        "popular",
        process.env.TMDB_API_KEY,
        [`language=${language}`, `page=${page}`]
    )

    const results = await getResults(url)
    return results.slice(0, maximum)
}