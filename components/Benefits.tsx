import { getBenefits, getBenefitsIcons } from "../content/benefits"

export default function Benefits() {
    const benefits = getBenefits()
    const icons = getBenefitsIcons()
    return (
        <section className="text-gray-600 body-font py-12 lg:py-36">
            <div className="container mx-auto">
                <h2 className="font-bold pb-6">First steps</h2>
                <div className="flex flex-col md:flex-row items-stretch flex-wrap gap-6">
                    {benefits.map((benefit) => (
                        <a
                            href=""
                            key={`benefit-${benefit.title}`}
                            className="flex flex-1 group"
                        >
                            <div className="border-2 border-gray-200 p-6 rounded-lg group-hover:bg-secondary group-hover:border-secondary transition ease-in-out delay-[50]">
                                <div className="flex gap-3 items-center mb-4">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white text-secondary p-2">
                                        {icons[benefits.indexOf(benefit)]}
                                    </div>
                                    <div className="h4 text-secondary group-hover:text-white font-bold title-font transition ease-in-out delay-[50]">
                                        {benefit.title}
                                    </div>
                                </div>
                                <p className="leading-relaxed text-white">
                                    {benefit.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
