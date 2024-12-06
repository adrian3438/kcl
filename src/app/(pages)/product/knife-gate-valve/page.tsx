import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";


export default async function KnifeGateValve({searchParams: {lang}}: any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>

            <Footer language={language}/>
        </>
    );
}
