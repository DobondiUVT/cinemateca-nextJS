import Image from "next/image"
import hero from "../assets/img/hero.jpg"
export default function Hero() {
    return (
        <section className="text-gray-600 body-font">
            <div className="relative h-[calc(100vh-98px)]">
                <div className="container mx-auto">
                    <div className="bg-base-100 flex-[60]">
                        <div className="container mx-auto h-[calc(100vh-98px)] flex">
                            <div className="my-auto w-[60%]">
                                <h1 className="text-6xl font-bold text-white">
                                    Discover an ocean of cinema
                                </h1>
                                <p className="text-3xl text-gray-300 mt-2">
                                    Find masterpieces. Judge honestly. Share opinions.
                                </p>
                                <button className="text-xl shadow btn btn-primary btn-lg mt-6">Start browsing</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[40%] h-[calc(100vh-98px)] top-0 right-0">
                    <div className="w-full h-full relative">
                        <Image
                            className="object-cover"
                            src={hero}
                            alt=""
                            fill
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-black opacity-25" /> */}
                        <div className="absolute text-white italic bottom-4 right-4">
                            Dune (2022)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
