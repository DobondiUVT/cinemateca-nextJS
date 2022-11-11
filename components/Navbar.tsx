import Image from "next/image"

export default function Navbar() {
    return (
        <div className="bg-base-100 relative">
            <div className="navbar container mx-auto px-0 py-6">
                <div className="flex-1">
                    <a className=" text-white normal-case text-3xl">
                        <Image src="/Logo.svg" alt="" width="200" height="60" />
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            className="input input-bordered bg-slate-200 text-black placeholder-gray-600"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
