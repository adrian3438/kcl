import "@/assets/media/blog.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import BlogDetail from "@/components/pages/media/BlogDetail";

export default async function BlogDetailPage({searchParams : {lang}, params: { id }} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <BlogDetail language={language} id={id}/>
            <Footer language={language}/>
        </>
    );
}
