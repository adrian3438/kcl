import "@/assets/media/catalog.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Link from "next/link";
import Image from "next/image";

export default async function Catalog({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="container">
                <ul className="location">
                    <li>{language?.header_4}</li>
                    <li>{language?.header_4_2}</li>
                </ul>
                <ul className="catalog-list">
                 
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1045185579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1045185579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1045185579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1045185579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                    <li>
                        <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1045185579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} title="kclvalve-main-video-4"></iframe></div>
                    </li>
                </ul>
            </div>
            <Footer language={language}/>
        </>
    );
}
