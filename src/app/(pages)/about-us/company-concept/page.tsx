import "@/assets/about-us/concept.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";

export default async function CompanyConcept({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="sub-banner2" style={{background: "url(/images/sub/sub-banner-bg-01.jpg) no-repeat 0 0 #edb8f0", backgroundSize: "auto 100%"}}>
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
            <div className="cosection-02">
               <div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="main-video-01"
                        >
                            <source src="/video/kclvalve-copmany-concept_rev2.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        {/* <Link href="#">
                            <p>OOO Test</p>

                            <p>Go to OOO valve</p>
                        </Link> */}
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
