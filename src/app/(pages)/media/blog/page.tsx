import "@/assets/media/blog.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import BlogList from "@/components/pages/media/BlogList";

export default async function Blog({searchParams : {lang, page}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <BlogList language={language} page={page || 1}/>
            <Footer language={language}/>
        </>
    );
}
