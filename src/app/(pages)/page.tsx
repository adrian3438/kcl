import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Main from "@/components/pages/Main";

export default async function Home({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <Main language={language}/>
            <Footer language={language}/>
        </>
    );
}
