"use client"

import supabase from "helpers/supabase"
import { useState } from "react"

export default function ProfileTab({ profile }) {
    const [username, setUsername] = useState(profile.username || "")
    const [avatar_url, setAvatar_url] = useState(profile.avatar_url || "")
    const updateProfile = async function () {
        const { error } = await supabase
            .from("profiles")
            .update({ username: username, avatar_url: avatar_url })
            .eq("id", profile.id)
        if (error) {
            console.log(error)
        } else {
            location.reload()
        }
    }
    return (
        <div className="pt-8">
            <form>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="text-white bg-gray-800 border border-gray-700 rounded-md p-2"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold" htmlFor="avatar_url">
                            Avatar URL
                        </label>
                        <input
                            type="text"
                            name="avatar_url"
                            id="avatar_url"
                            value={avatar_url}
                            onChange={(e) => {
                                setAvatar_url(e.target.value)
                            }}
                            className="text-white bg-gray-800 border border-gray-700 rounded-md p-2"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            updateProfile()
                        }}
                        className="bg-secondary text-white rounded-md self-end btn btn-md mt-4"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
