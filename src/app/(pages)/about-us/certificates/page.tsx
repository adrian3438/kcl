import "@/assets/about-us/certificates.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";

export default async function Certificates({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="container">
                <ul className="location">
                    <li>{language?.header_1}</li>
                    <li>{language?.header_1_6}</li>
                </ul>
                <div className="title-area1">
                    <h2>{language?.partner_04}</h2>
                </div>
                <div className="certificates">

                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
