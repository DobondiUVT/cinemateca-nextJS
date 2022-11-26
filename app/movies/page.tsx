import CardsSkeleton from "components/CardsSkeleton"
import { getCardsSection } from "content/browseCards"
import Link from "next/link"

export default function Page() {
    const cardsSections = getCardsSection()
    return (
        <section>
            <div className="container mx-auto py-8">
                <p className="text-4xl">What are you searching for?</p>
                <p className="text-md pt-3">
                    Here are some popular tags that users are looking for
                </p>
                <div className="py-6"></div>
                {cardsSections.map((section, section_index) => (
                    <div className="pb-5" key={`section-${section_index}`}>
                        <p className="text-2xl font-bold pb-3">
                            {section.title}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {section.cards.map((card, card_index) => (
                                <Link
                                    key={`card-${section_index}${card_index}`}
                                    href={card.link ? card.link : "#"}
                                >
                                    <div className="bg-gray-800 hover:bg-secondary transition-colors p-6 text-lg font-bold rounded-lg capitalize">
                                        {card.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
