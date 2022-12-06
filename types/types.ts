export type Genre = {
    id: number,
    name: string
};

export type Movie = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null | Object,
    budget: number,
    genres: Array<Genre>,
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    release_date: string,
    revenue: number,
    runtime: number | null,
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type Cast = {
    adult: boolean,
    gender: number | null,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string | null,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

export type Crew = {
    adult: boolean,
    gender: number | null,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string | null,
    credit_id: string,
    department: string,
    job: string
}

export type Credits = {
    id: number,
    cast: Array<Cast>,
    crew: Array<Crew>
}