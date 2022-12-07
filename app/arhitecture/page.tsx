import Image from "next/image"

export default function Page() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    <Image
                        src="/diagrama_cinemateca.png"
                        width={751}
                        height={791}
                        alt="Arhitecture diagram"
                    />
                </div>
            </div>
        </section>
    )
}
