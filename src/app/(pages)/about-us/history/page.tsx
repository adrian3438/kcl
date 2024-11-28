import "@/assets/about-us/partner.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";

export default async function History({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="sub-banner" style={{background: "url(/images/sub/sub-banner-bg-02.png) no-repeat 50% 0", backgroundSize: "100% 100%"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.history_01}</p>
                        <p className="banner-text-01">{language?.history_02}</p>
                        <p className="banner-text-02">{language?.history_03}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="title-area1">
                    <h2>{language?.history_04}</h2>
                    <p className="after">{language?.history_05}</p>
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
