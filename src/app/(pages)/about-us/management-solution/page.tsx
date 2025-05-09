import "@/assets/about-us/management-solution.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";

export default async function ManagementSolution({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language} white={true}/>

            <div className="sub-banner5" style={{background: "url(/images/sub/company-bg-01.jpg) no-repeat 50% 0", backgroundSize: "100% 100%"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.greeting_01}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul className="location">
                    <li>{language?.header_1}</li>
                    <li>{language?.header_1_1}</li>
                </ul>
                <div className="management-solution">
                    <section className="section-type-01 bg-01">
                        <div className="text-area">
                            <h2>{language?.solution_01}</h2>
                            <p>{language?.solution_02}<br/>{language?.solution_03}<br/>{language?.solution_03_01}</p>
                            <p>{language?.solution_04}<br/>{language?.solution_05}</p>
                            <p>{language?.solution_06}</p>
                        </div>
                        <div className="image-area">
                            <Image src="/images/sub/solution/solution-01.png" alt="" width={618} height={583}/>
                        </div>
                    </section>
                    <section className="section-type-01 bg-02">
                        <div className="image-area">
                            <Image src="/images/sub/solution/solution-05.png" alt="" width={618} height={583}/>
                        </div>
                        <div className="text-area">
                            <h2>{language?.solution_18}</h2>
                            <p>{language?.solution_19}<br/>{language?.solution_20}</p>
                            <p>{language?.solution_21}</p>
                            <p>{language?.solution_22}<br/>{language?.solution_23}</p>
                        </div>

                    </section>
                    <section className="section-03">
                        <h2>{language?.solution_25}</h2>
                        <ul>
                            <li>
                                <Image src="/images/sub/solution/management-1.gif" alt="" width={480} height={480}/>
                            </li>
                            <li>
                                <Image src="/images/sub/solution/management-2.gif" alt="" width={480} height={480}/>
                            </li>
                            <li>
                                <Image src="/images/sub/solution/management-3.gif" alt="" width={480} height={480}/>
                            </li>
                        </ul>
                    </section>
                    <section className="section-type-01 bg-03">
                        <div className="text-area">
                            <h2>{language?.solution_26}</h2>
                            <p>{language?.solution_27}</p>
                            <p>{language?.solution_28}</p>
                            <p>{language?.solution_29}</p>
                            <p className="last"><span>{language?.solution_30}</span> | {language?.solution_31}</p>
                        </div>
                        <div className="image-area">
                            <Image src="/images/sub/solution/solution-09.png" alt="" width={656} height={654}/>
                        </div>
                    </section>
                    <section className="section-04">
                        <h2>{language?.solution_32}</h2>
                        <ul>
                            <li>
                                <Image src="/images/sub/solution/solution-10.jpg" alt="" width={491} height={446}/>
                                <p>{language?.solution_33}</p>
                                <div></div>
                            </li>
                            <li>
                                <Image src="/images/sub/solution/solution-11.jpg" alt="" width={491} height={446}/>
                                <p>{language?.solution_34}</p>
                                <div></div>
                            </li>
                            <li>
                                <Image src="/images/sub/solution/solution-12.jpg" alt="" width={491} height={446}/>
                                <p>{language?.solution_35}</p>
                                <div></div>
                            </li>
                        </ul>
                    </section>
                    <section className="section-type-01 bg-04">
                        <div className="image-area">
                            <Image src="/images/sub/solution/solution-13.png" alt="" width={656} height={654}/>
                        </div>
                        <div className="text-area">
                            <h2>{language?.solution_36}</h2>
                            <p>{language?.solution_37}<br/>{language?.solution_38}</p>
                            <p>{language?.solution_39}<br/>{language?.solution_40}</p>
                            <p>{language?.solution_41}<br/>{language?.solution_42}<br/>{language?.solution_43}</p>
                            <p className="last"><span>{language?.solution_44}</span> | {language?.solution_45}</p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
