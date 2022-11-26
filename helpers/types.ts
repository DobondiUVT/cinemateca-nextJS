export type Genre = {
    id: Number,
    name: String
};

export type Movie = {
    adult: Boolean,
    backdrop_path: String,
    belongs_to_collection: null | Object,
    budget: Number,
    genres: Array<Genre>,
    homepage: String | null,
    id: Number,
    imdb_id: String | null,
    original_language: String,
    original_title: String,
    overview: String | null,
    popularity: Number,
    poster_path: String | null,
    release_date: String,
    revenue: Number,
    runtime: Number | null,
    status: String,
    tagline: String | null,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number
}