import { FilmIcon, StarIcon, ShareIcon } from "@heroicons/react/24/solid"

export function getBenefits() {
    type Benefits = {
        title: string
        description: string
    }
    const benefits: Benefits[] = [
        {
            title: "Find",
            description:
                "Find new movies by browsing our collection, filtering by all your needs, and sorting by your preferences.",
        },
        {
            title: "Judge",
            description:
                "Judge all the films you have seen by rating them and writing reviews. Read other people's opinions to get insight.",
        },
        {
            title: "Share",
            description:
                "Share your favorite ones with your friends, family or anyone online. Let them know what you think about them.",
        },
    ]

    return benefits
}

export function getBenefitsIcons() {
    const icons: JSX.Element[] = [
        <FilmIcon key="icon-1" />,
        <StarIcon key="icon-2" />,
        <ShareIcon key="icon-3" />,
    ]
    return icons
}

