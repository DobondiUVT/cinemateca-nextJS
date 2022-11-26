import { Criteria, Decade, Genre } from "helpers/enums"

export function getCardsSection() {
    const cardsSections = [
        {
            title: "By criteria",
            cards: Object.keys(Criteria).map((criteria) => ({
                title: criteria,
                link: `/movies/${criteria}`,
            })),
        },
        {
            title: "By genre",
            cards: Object.keys(Genre).map((genre) => ({
                title: genre,
                link: `/movies/genre/${genre}`,
            })),
        },
        {
            title: "By decade",
            cards: Object.keys(Decade).map((decade) => ({
                title: decade,
                link: `/movies/decade/${decade}`,
            })),
        },
    ]
    return cardsSections
}
