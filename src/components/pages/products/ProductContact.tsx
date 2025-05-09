import Link from "next/link";
import Image from "next/image";

interface Props {
    language: any
}

export default function ProductContact({language}: Props) {
    return (
        <section className="product-contact">
            <p>{language?.product_contact_01}</p>
            <Link href="/contact">{language?.product_contact_02}<Image src="/images/main/right-arrow.svg" alt="" width={24} height={24}/></Link>
        </section>
    )
}
