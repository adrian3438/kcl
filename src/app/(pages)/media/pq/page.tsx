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
                        <Link href="/catalog/kcl-company-product-guide-new/index.html" target="_blank">
                            <Image src="/images/sub/catalog/catalog-list-02.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_02}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/catalog/CONTROL(FINAL)/index.html" target="_blank">
                            <Image src="/images/sub/catalog/catalog-list-03.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_03}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/catalog/tunnion-dbb-ball-valve-_rev1/index.html" target="_blank">
                            <Image src="/images/sub/catalog/catalog-list-04.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_04}</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer language={language}/>
        </>
    );
}
