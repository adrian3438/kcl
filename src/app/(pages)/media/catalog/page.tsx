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
                    <li>{language?.header_4_2}</li>
                </ul>
                <ul className="catalog-list">
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-01.jpg" alt="" width={289} height={217}/>
                            <p>{language?.catalog_01}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-02.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_02}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-03.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_03}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-04.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_04}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-05.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_05}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-06.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_06}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-07.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_07}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-08.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_08}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-09.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_09}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-10.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_10}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-11.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_11}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-12.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_12}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-13.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_13}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/sub/catalog/catalog-list-14.jpg" alt="" width={250} height={333}/>
                            <p>{language?.catalog_14}</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer language={language}/>
        </>
    );
}
