import Image from "next/image"
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid"

export default function Review({ user, review }) {
    const getRatingColor = (rating) => {
        if (rating >= 80) {
            return "bg-green-500"
        } else if (rating >= 60) {
            return "bg-yellow-500"
        } else {
            return "bg-red-500"
        }
    }
    return (
        <div className="bg-slate-700 rounded-lg flex flex-col  border-slate-600 shadow-xl">
            <div className="flex flex-col gap-2 p-6 flex-1">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src={user.avatar}
                                alt={user.username}
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{user.username}</h3>
                            <p className="text-gray-400 text-sm">
                                {review.created_at.slice(0, 10)}
                            </p>
                        </div>
                    </div>
                    <div className={`${getRatingColor(review.rating)} flex items-center justify-center px-4 py-2 rounded-lg text-lg font-bold`}>
                        {review.rating}
                    </div>
                </div>
                <p className="text-gray-200">{review.content}</p>
            </div>
            <div className="bg-slate-800 px-6 py-3 rounded-b-lg">
                <div className="flex items-center justify-end gap-3">
                    <button className="btn bg-black border-black btn-sm btn-outline btn-error gap-2 flex items-center">
                        <HandThumbDownIcon color="white" width={16}/>
                        <div className="normal-case">Disagree</div>
                        <div className="w-[1px] bg-gray-400">&nbsp;</div>
                        <div>3</div>
                    </button>
                    <button className="btn bg-black border-black btn-sm btn-outline btn-secondary gap-2 flex items-center">
                        <HandThumbUpIcon color="white" width={16}/>
                        <div className="normal-case">Agree</div>
                        <div className="w-[1px] bg-gray-400">&nbsp;</div>
                        <div>75</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
