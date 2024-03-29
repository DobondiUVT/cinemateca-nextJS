"use client"
import { useEffect, useState } from "react"
import {
    getNumberOfMoviesWatched,
    getProfileData,
    getProfileDataById,
    getUser,
} from "helpers/database"
import supabase from "helpers/supabase"
import Image from "next/image"
import ProfileTab from "components/Profile/ProfileTab"
import MoviesTab from "components/Profile/MoviesTab"
import ListsTab from "components/Profile/ListsTab"

export default function Page({params}) {
    let id = params.id
    // get supabase profile
    let [profile, setProfile] = useState(null)
    const [tabs, setTabs] = useState([1, 0])
    const [numberOfMoviesWatched, setNumberOfMoviesWatched] = useState(0)

    useEffect(() => {
        getProfileDataById(id).then((profile) => {
            setProfile(profile)
        })
        console.log(profile)
        getNumberOfMoviesWatched(id.toString()).then((number) => {
            setNumberOfMoviesWatched(number)
        })
    }, [])
    if (profile) {
        return (
            <section className="py-10">
                <div className="container mx-auto pt-5">
                    <div className="flex gap-4 items-center mb-6">
                        <div className="rounded-full">
                            {profile?.avatar_url && (
                                <Image
                                    src={profile?.avatar_url}
                                    alt="avatar"
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                />
                            )}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">
                                {profile?.username}
                            </h1>
                            <div className="badge badge-secondary font-bold">{`${numberOfMoviesWatched ?? 0} ${
                                numberOfMoviesWatched > 1 || numberOfMoviesWatched == 0
                                    ? "movies"
                                    : "movie"
                            } seen`}</div>
                        </div>
                    </div>
                    <div className="tabs p-6 bg-gray-400 bg-opacity-20 rounded-md">
                        <a
                            className={`tab flex-1 text-lg pb-6 tab-bordered ${
                                tabs[0] ? "tab-active font-bold" : ""
                            }`}
                            onClick={() => {
                                setTabs([1, 0])
                            }}
                        >
                            Favorites
                        </a>
                        <a
                            className={`tab flex-1 text-lg pb-6 tab-bordered ${
                                tabs[1] ? "tab-active font-bold" : ""
                            }`}
                            onClick={() => {
                                setTabs([0, 1])
                            }}
                        >
                            Lists
                        </a>
                    </div>
                    <div className={!tabs[0] ? "hidden" : ""}>
                        {profile && <MoviesTab profile={profile} />}
                    </div>
                    <div className={!tabs[1] ? "hidden" : ""}>
                        {profile && <ListsTab profile={profile} />}
                    </div>
                </div>
            </section>
        )
    }
}
