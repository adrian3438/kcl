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
            <div className="consection-02>">
            <div>
                <img src="/images/sub/concept/company-concept-valves.jpg" alt="concept-01" className="concept-01" style={{position: 'relative', top: 0, left: 0, width: "100%", height: '100%'}}/>
            </div>
            </div>


            <div className="cosection-02">
            <div style={{padding: '56.25% 0 0 0', position:'relative'}}>
                  <iframe src="https://player.vimeo.com/video/1045185563?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&background=1&muted=1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position: 'absolute', top: 0, left: 0, width: "100%", height: '100%'}} title="kclvalve_homepage_main_concept_rev2"></iframe>
              </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
