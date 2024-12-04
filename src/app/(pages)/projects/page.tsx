import "@/assets/projects/projects.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";

export default async function Projects({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div>프로젝트</div>
            <Footer language={language}/>
        </>
    );
}
