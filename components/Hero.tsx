import Image from "next/image"
import hero from "../assets/img/hero.jpg"
export default function Hero() {
    return (
        <section className="text-gray-600 body-font pt-6 lg:py-0">
            <div className="lg:relative lg:h-[calc(100vh-64px)]">
                <div className="container mx-auto">
                    <div className="bg-base-100 lg:flex-[60]">
                        <div className="lg:h-[calc(100vh-64px)] flex">
                            <div className="my-auto lg:w-[60%]">
                                <h1 className="font-bold">
                                    Discover an ocean of cinema
                                </h1>
                                <p className="h4 text-gray-300 mt-2 mb-4">
                                    Find masterpieces. Judge honestly. Share opinions.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="shadow btn btn-primary text-neutral ">Start browsing</button>
                                    <button className="shadow btn btn-outline btn-secondary ">HOW DOES IT WORK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[240px] mt-12 lg:mt-0 lg:absolute lg:w-[40%] lg:h-[calc(100vh-64px)] lg:top-0 lg:right-0">
                    <div className="w-full h-full relative">
                        <Image
                            className="object-cover object-bottom"
                            src={hero}
                            alt=""
                            fill
                        />
                        <div className="absolute text-white italic bottom-4 right-4">
                            Dune (2022)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
