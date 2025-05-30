import "@/assets/media/catalog.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
// import Link from "next/link";
// import Image from "next/image";

export default async function Catalog({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language} white={true}/>
            <div className="container media-container">
                <h2>{language?.header_4_4}</h2>
                <ul className="location">
                    <li>{language?.header_4}</li>
                    <li>{language?.header_4_4}</li>
                </ul>
                <ul className="catalog-list video-list">

                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1045185579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1062608994?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1062608971?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1063103369?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1063103650?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>

                </ul>
            </div>
            <Footer language={language}/>
        </>
    );
}
