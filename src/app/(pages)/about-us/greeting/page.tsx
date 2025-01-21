import "@/assets/about-us/greeting.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";
import GreetingSwiper from "@/components/pages/about-us/GreetingSwiper";

export default async function Greeting({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="sub-banner5" style={{background: "url(/images/sub/sub-banner-bg-04.jpg) no-repeat 50% 0", backgroundSize: "100% 100%"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.greeting_01}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <section className="section-type-01">
                    <div className="text-area">
                        <h2>{language?.greeting_02}</h2>
                        <div className="image-area-m">
                            <Image src="/images/sub/greeting/ceo.png" alt="" width={490} height={701}/>
                        </div>
                        <p>{language?.greeting_03}</p>
                        <p>{language?.greeting_04}</p>
                        <p>{language?.greeting_05}</p>
                        <p>{language?.greeting_06}</p>
                        <p>{language?.greeting_07}</p>
                        <p>{language?.greeting_08}</p>
                        <p style={{margin: "100px 0 0"}}>{language?.greeting_09}</p>
                        <p>{language?.greeting_10}</p>
                    </div>
                    <div className="image-area">
                        <Image src="/images/sub/greeting/ceo.png" alt="" width={490} height={701}/>
                    </div>
                </section>
                <div className="title-area2">
                    <h2>{language?.greeting_11}</h2>
                    <p className="title-text1">&#34;{language?.greeting_12}&#34;</p>
                    <p className="title-text2">{language?.greeting_13}</p>
                    <p className="title-text3">{language?.greeting_14}</p>
                </div>
            </div>
            <div className="container4">
                <div>
                    <section className="section-type-02">
                        <div className="text-area">
                            <h2>{language?.greeting_15}</h2>
                            <div className="image-area-m">
                                <Image src="/images/sub/greeting/kclvalve_ceoGreetings_philosopy_3.png" alt="" width={662} height={662}/>
                            </div>
                            <p>{language?.greeting_16}<br/>{language?.greeting_17}</p>
                            <p>{language?.greeting_18}<br/>{language?.greeting_19}<br/>{language?.greeting_20}</p>
                        </div>
                        <div className="image-area">
                            <Image src="/images/sub/greeting/kclvalve_ceoGreetings_philosopy_3.png" alt="" width={662} height={662}/>
                        </div>
                    </section>
                    <section className="section-type-02">
                        <div className="image-area">
                            <Image src="/images/sub/greeting/kclvalve_ceoGreetings_philosopy_2.png" alt="" width={662} height={662}/>
                        </div>
                        <div className="text-area">
                            <h2>{language?.greeting_21}</h2>
                            <div className="image-area-m">
                                <Image src="/images/sub/greeting/kclvalve_ceoGreetings_philosopy_2.png" alt="" width={662} height={662}/>
                            </div>
                            <p>{language?.greeting_22}</p>
                            <p>{language?.greeting_23}</p>
                            <p>{language?.greeting_24}</p>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container3">
                <div>
                    <section className="section-type-03">
                        <div className="text-area">
                            <h2>{language?.greeting_25}</h2>
                            <div className="image-area-m">
                                <Image src="/images/sub/greeting/kclvalve_ceoGreetings_philosopy_1.png" alt="" width={662} height={662}/>
                            </div>
                            <p>{language?.greeting_26}<br/>{language?.greeting_27}</p>
                            <p>{language?.greeting_28}</p>
                            <p>{language?.greeting_29}</p>
                        </div>
                        <div className="image-area">
                            <Image src="/images/sub/greeting/kclvalve_ceoGreetings_philosopy_1.png" alt="" width={662} height={662}/>
                        </div>
                    </section>
                </div>
            </div>

            {/* <div className="company-location">
            <h2>{language?.greeting_30}</h2>
            <GreetingSwiper/>
            </div>             */}

            <div className="company-location">
                <h2>{language?.greeting_31}</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9922551384498!2d126.82949907639745!3d37.319011138281944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f0471593963%3A0x7d671ffdc8793cb0!2z7LyA7J207JSo7JeY!5e0!3m2!1sko!2skr!4v1736315820675!5m2!1sko!2skr" width="600" height="800" style={{width: "100%",border: 0}}></iframe>
            </div>

            <Footer language={language}/>
        </>
    );
}
