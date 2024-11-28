import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";

export default async function Certificates({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="container">
                <div className="sub-banner" style={{background: "url(/images/sub/sub-banner-bg-03.png) no-repeat 50% 0"}}>

                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
