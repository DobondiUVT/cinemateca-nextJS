import Breadcrumbs from "./Breadcrumbs"

export default function CardsSkeleton({ title }) {
    const links = [
        {
            title: "Home",
            link: "/",
        },
    ]
    return (
        <div>
            <Breadcrumbs links={links} />
            <section className="container mx-auto py-6">
                <h1 className="text-3xl pt-4 pb-10">{title}&nbsp;</h1>
                <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded-md border border-gray-600  transition-colors hover:border-2 hover:border-secondary aspect-[2/3] max-h-[380px]"
                        >
                            <div className="flex flex-col">
                                <div className="relative aspect-[2/3] bg-gray-800"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
