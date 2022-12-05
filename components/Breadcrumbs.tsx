import Link from "next/link"
type Link = {
    title: string
    link: string
}
type Links = Link[]
export default function Breadcrumbs({ links: links }: { links: Links }) {
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
                                <span className="font-bold underline">{link.title}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
