import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    const isLoggedIn = false
    return (
        <div className="bg-base-100 relative">
            <div className="navbar container mx-auto px-0 py-2">
                <div className="flex-1">
                    <Link href="/" title="Go to the homepage">
                        <Image src="/Logo.svg" alt="" width="32" height="36" />
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            title="Searchbar, find movies"
                            className="input input-bordered bg-slate-200 text-neutral placeholder-gray-600"
                        />
                    </div>
                    {isLoggedIn ? (
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
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    )
}
