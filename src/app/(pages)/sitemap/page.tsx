import "@/assets/sitemap/sitemap.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Link from "next/link";

export default async function Home({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="sitemap-container">
                <h2>Sitemap</h2>
                <div>
                    <dl>
                        <dt>{language?.header_1}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/about-us/management-solution">{language?.header_1_1}</Link></li>
                                <li><Link href="/about-us/company-concept">{language?.header_1_2}</Link></li>
                                <li><Link href="/about-us/greeting">{language?.header_1_3}</Link></li>
                                <li><Link href="/about-us/history">{language?.header_1_4}</Link></li>
                                <li><Link href="/about-us/partner">{language?.header_1_5}</Link></li>
                                <li><Link href="/about-us/certificates">{language?.header_1_6}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>{language?.header_2}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/product/forged-ball-valve">{language?.header_2_1}</Link></li>
                                <li><Link href="/product/casted-ball-valve">{language?.header_2_2}</Link></li>
                                <li><Link href="/product/plug-valve">{language?.header_2_3}</Link></li>
                                <li><Link href="/product/casting-valve">{language?.header_2_4}</Link></li>
                                <li><Link href="/product/butterfly-valve">{language?.header_2_5}</Link></li>
                                <li><Link href="/product/control-valve">{language?.header_2_6}</Link></li>
                                <li><Link href="/product/post-indicator-gate-valve">{language?.header_2_7}</Link></li>
                                <li><Link href="/product/knife-gate-valve">{language?.header_2_9}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                {/*<div>
                    <dl>
                        <dt>{language?.header_3}</dt>
                        <dd>
                            <ul>
                                <li><Link href="">{language.header_1_1}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>*/}
                <div>
                    <dl>
                        <dt>{language?.header_4}</dt>
                        <dd>
                            <ul>
                                <li><Link href="/media/blog">{language?.header_4_1}</Link></li>
                                <li><Link href="/media/catalog">{language?.header_4_2}</Link></li>
                                <li><Link href="/media/3d-modeling">{language?.header_4_3}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>{language?.header_5}</dt>
                        <dd>
                            <ul>
                            <li><Link href="/contact">{language.header_5}</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
