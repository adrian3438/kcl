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
                        <Link href="/catalog/kcl-pq-2021-may-210515/index.html" target="_blank">
                            <Image src="/images/sub/catalog/catalog-list-02.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_02}</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer language={language}/>
        </>
    );
}
