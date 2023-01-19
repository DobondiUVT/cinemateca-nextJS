import Link from "next/link"

export default function Breadcrumbs({ links }) {
    return (
        <div className="container mx-auto pt-4">
            <div className="text-sm breadcrumbs">
                <ul>
                    {links.map((link, index) => (
                        <li key={`breadcrumb-${index}`}>
                            {link.link ? (
                                <Link href={link.link ? link.link : "#"}>
                                    {link.title}
                                </Link>
                            ) : (
                                <span className="font-bold underline capitalize">{link.title}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
