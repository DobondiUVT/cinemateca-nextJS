
"use client"
import ProfileCard from "components/Profile/ProfileCard"
import { getAllProfileData } from "helpers/database"
import { useEffect, useState } from "react"

export default function Page() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            let data = await getAllProfileData()
            setUsers(data)
            console.log(data)
        }
        getUsers()
    }, [])
    

    return (
        <section>
            <div className="container mx-auto py-8">
                <div className="flex items-center gap-4 flex-wrap">
                    {users && users.map((user, index) => 
                        {
                            if (user.username && user.avatar_url)
                                return (
                                    <ProfileCard user={user} key={index} />
                                )
                        }
                    )}
                </div>
            </div>
        </section>
    )
}
