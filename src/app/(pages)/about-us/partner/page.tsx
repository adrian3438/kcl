import "@/assets/about-us/partner.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";
import PartnerSwiper from "@/components/pages/about-us/PartnerSwiper";
import PartnerDetail from "@/components/pages/about-us/PartnerDetail";

export default async function Certificates({searchParams: {lang}}: any) {
  const language = await fetchLanguage(lang);
  return (
    <>
      <Header language={language}/>
      <div className="sub-banner" style={{background: "url(/images/sub/sub-banner-bg-03.jpg) no-repeat 37% 0", backgroundSize: "auto 100%"}}>
        <div className="banner-text">
          <div>
            <p className="banner-text-title">{language?.partner_01}</p>
            <p className="banner-text-01">{language?.partner_02}</p>
            <p className="banner-text-02">{language?.partner_03}</p>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="title-area1">
          <h2>{language?.partner_04}</h2>
          <p>{language?.partner_05}</p>
        </div>
        <PartnerDetail language={language}/>
      </div>

      <div className="with-partners">
        <h2>{language?.partner_06}</h2>
        <PartnerSwiper/>
      </div>


      <div className="partner-map">
        <div className="with-partners">
          <h2>{language?.partner_07}</h2>

        </div>
        <Image src="/images/sub/partner/partner-map.png" alt="KCL Middle East FZE" width={1920} height={1188}/>
      </div>
      <Footer language={language}/>
    </>
  );
}
