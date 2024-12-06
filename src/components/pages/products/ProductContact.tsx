import Link from "next/link";

interface Props {
    language: any
}

export default function ProductContact({language}: Props) {
    return (
        <section className="product-contact">
            <p>{language?.product_contact_01}</p>
            <Link href="/contact">{language?.product_contact_02}</Link>
        </section>
    )
}
