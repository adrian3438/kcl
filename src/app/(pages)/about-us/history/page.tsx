import "@/assets/about-us/partner.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import History from "@/components/pages/about-us/History";

export default async function HistoryPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <History language={language}/>
            <Footer language={language}/>
        </>
    );
}
