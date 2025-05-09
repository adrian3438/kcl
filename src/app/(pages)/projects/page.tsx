import "@/assets/projects/projects.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import ProjectList from "@/components/sub/ProjectList";
import api from "@/lib/api";

export default async function Projects({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    const response = await api.get('/admin/code/getProjectGroupList.php');
    const projectGroupList = response?.data?.List;

    return (
        <>
            <Header language={language} white={true}/>
            <ProjectList language={language} projectGroupList={projectGroupList}/>
            <Footer language={language}/>
        </>
    );
}
