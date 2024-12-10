import "@/assets/media/model.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Modeling from "@/components/pages/media/Modeling";

export default async function ModelingPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="model-container">
                <Modeling/>

            </div>
            <Footer language={language}/>
        </>
    );
}
