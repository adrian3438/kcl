import "@/assets/media/catalog.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Link from "next/link";
import Image from "next/image";

export default async function Catalog({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="container">
                <ul className="location">
                    <li>{language?.header_4}</li>
                    <li>{language?.header_4_5}</li>
                </ul>
                <ul className="catalog-list">
                 
                    <li>
                        <Link href="/catalog/KCL-PQ-2024/index.html" target="_blank">
                            <Image src="/images/sub/catalog/catalog-list-01.jpg" alt="" width={720} height={540}/>
                            <p>{language?.catalog_02}</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer language={language}/>
        </>
    );
}
