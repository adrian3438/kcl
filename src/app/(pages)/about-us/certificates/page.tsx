import "@/assets/about-us/certificates.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Certificates from "@/components/pages/about-us/Certificates";

export default async function CertificatesPage({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language} white={true}/>
            <Certificates language={language}/>
            <Footer language={language}/>
        </>
    );
}
