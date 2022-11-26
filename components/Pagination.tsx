import Link from "next/link"

export default function Pagination({
    path,
    page,
    last,
}: {
    path: string
    page: number
    last: boolean
}) {
    return (
        <div className="container mx-auto pt-5 pb-10">
            <div className="flex gap-3 items-center justify-end">
                {page > 1 && (
                    <Link href={`${path}/page/${page - 1}`}>
                        <div className="btn btn-outline btn-secondary">
                            Previous page
                        </div>
                    </Link>
                )}
                {last === false ? (
                    <Link href={`${path}/page/${page + 1}`}>
                        <div className="btn btn-outline btn-secondary">Next page</div>
                    </Link>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}
