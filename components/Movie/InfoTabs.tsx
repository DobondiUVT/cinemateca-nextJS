"use client"
import { useState } from "react"

export default function InfoTabs({ movieDetails, movieCredits }) {
    const [tabs, setTabs] = useState([1, 0, 0])
    const intToFormatted = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    return (
        <div>
            <div className="tabs w-full lg:w-[80%]">
                <a
                    className={`tab flex-1 text-md pb-4 tab-bordered ${
                        tabs[0] ? "tab-active" : ""
                    }`}
                    onClick={() => {
                        setTabs([1, 0, 0])
                    }}
                >
                    Cast
                </a>
                <a
                    className={`tab flex-1 text-md pb-4 tab-bordered ${
                        tabs[1] ? "tab-active" : ""
                    }`}
                    onClick={() => {
                        setTabs([0, 1, 0])
                    }}
                >
                    Crew
                </a>
                <a
                    className={`tab flex-1 text-md pb-4 tab-bordered ${
                        tabs[2] ? "tab-active" : ""
                    }`}
                    onClick={() => {
                        setTabs([0, 0, 1])
                    }}
                >
                    Details
                </a>
            </div>
            <div id="cast-tab" className={!tabs[0] ? "hidden" : ""}>
                <div className="flex gap-2 flex-wrap py-4">
                    {movieCredits.cast &&
                        movieCredits.cast.slice(0, 20).map((cast, index) => (
                            <div
                                className="bg-gray-800 p-2 text-sm rounded-md hover:bg-secondary transition-colors cursor-pointer"
                                key={`cast-${index}`}
                            >
                                {cast.name}
                            </div>
                        ))}
                </div>
            </div>
            <div id="crew-tab" className={!tabs[1] && "hidden"}>
                <div className="flex gap-2 flex-wrap py-4">
                    {movieCredits.crew &&
                        movieCredits.crew.slice(0, 20).map((crew, index) => (
                            <div
                                className="bg-gray-800 p-2 text-sm rounded-md hover:bg-secondary transition-colors cursor-pointer"
                                key={`crew-${index}`}
                            >
                                {crew.name}
                            </div>
                        ))}
                </div>
            </div>
            <div id="crew-tab" className={!tabs[2] && "hidden"}>
                <div className="flex gap-2 flex-wrap py-4">
                    <div className="bg-gray-800 p-2 text-sm rounded-md hover:bg-secondary transition-colors cursor-pointer">
                        {movieDetails.release_date}
                    </div>
                    <div className="bg-gray-800 p-2 text-sm rounded-md hover:bg-secondary transition-colors cursor-pointer">
                        {movieDetails.runtime} minutes
                    </div>
                    <div className="bg-gray-800 p-2 text-sm rounded-md hover:bg-secondary transition-colors cursor-pointer">
                        {/* show the budget intlFormatted */}
                        Budget: {intToFormatted(movieDetails.budget)} USD
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {movieDetails.genres.map((genre, index) => (
                        <div
                            key={`genre-${index}`}
                            className="bg-gray-800 p-2 text-sm rounded-md hover:bg-secondary transition-colors cursor-pointer"
                        >
                            <span>{genre.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
