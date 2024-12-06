import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";


export default async function CastingValve({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="sub-banner4" style={{background: "url(/images/sub/sub-banner-bg-03.png) no-repeat 37% 0", backgroundSize: "auto 100%"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.partner_01}</p>
                        <p className="banner-text-01">{language?.partner_02}</p>
                        <p className="banner-text-02">{language?.partner_03}</p>
                    </div>
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
