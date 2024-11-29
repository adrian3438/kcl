import "@/assets/about-us/concept.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";

export default async function CompanyConcept({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="sub-banner2" style={{background: "url(/images/sub/sub-banner-bg-01.png) no-repeat 0 0 #edb8f0", backgroundSize: "auto 100%"}}>
                <div className="banner-text">
                    <h2>Company Concept</h2>
                    <ul>
                        <li>{language?.concept_01}</li>
                        <li>{language?.concept_02}</li>
                        <li>{language?.concept_03}</li>
                        <li>{language?.concept_04}</li>
                        <li>{language?.concept_05}</li>
                        <li>{language?.concept_06}</li>
                        <li>{language?.concept_07}</li>
                        <li>{language?.concept_08}</li>
                        <li>{language?.concept_09}</li>
                        <li>{language?.concept_10}</li>
                        <li>{language?.concept_11}</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="concept">
                    <Image src="/images/sub/concept/concept.png" alt="Company Concept" width={1682} height={1268}/>
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
