"use client"
import Image from "next/image"
import Link from "next/link"

export default function ProfileCard({ user }) {
    console.log(user)
    return (
        <Link href={`/profile/${user.id}`}>
            <div className="bg-slate-700 rounded-lg flex flex-col  border-slate-600 shadow-xl hover:bg-secondary">
                <div className="flex flex-col gap-2 p-6 flex-1">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                {user.avatar_url && (
                                    <Image
                                        src={user.avatar_url}
                                        alt={user.username}
                                        width={40}
                                        height={40}
                                    /> 
                                )}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    {user.username}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
