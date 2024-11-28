import "@/assets/contact.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Contact from "@/components/pages/Contact";

export default async function ContactPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <Contact language={language}/>
            <Footer language={language}/>
        </>
    );
}
