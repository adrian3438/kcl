import "@/assets/about-us/partner.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";

export default async function Certificates({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="sub-banner" style={{background: "url(/images/sub/sub-banner-bg-03.png) no-repeat 37% 0", backgroundSize: "auto 100%"}}>
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
                <div className="partner">
                    <ul>
                        <li><Image src="/images/sub/partner/posco.png" alt="posco" width={358} height={179}/></li>
                        <li><Image src="/images/sub/partner/kolon.png" alt="kolon" width={167.33} height={155.5}/></li>
                        <li><Image src="/images/sub/partner/doosan.png" alt="doosan" width={313} height={100}/></li>
                        <li><Image src="/images/sub/partner/kcc.png" alt="kcc" width={226} height={125}/></li>
                        <li><Image src="/images/sub/partner/dsme.png" alt="dsme" width={471} height={277}/></li>
                        <li><Image src="/images/sub/partner/skenc.png" alt="skenc" width={225} height={225}/></li>
                        <li><Image src="/images/sub/partner/daewooenc.png" alt="daewooenc" width={348} height={145}/></li>
                        <li><Image src="/images/sub/partner/Mitsui-E&S.png" alt="Mitsui-E&S" width={267} height={145}/></li>
                        <li><Image src="/images/sub/partner/hitachi.png" alt="" width={328} height={184}/></li>
                        <li><Image src="/images/sub/partner/toyoEngineering.png" alt="toyoEngineering" width={155} height={181}/></li>
                        <li><Image src="/images/sub/partner/IHI_newsymbol.png" alt="IHI" width={230} height={89}/></li>
                        <li><Image src="/images/sub/partner/chevron.png" alt="chevron" width={148} height={165}/></li>
                        <li><Image src="/images/sub/partner/petronas.png" alt="petronas" width={318} height={123}/></li>
                        <li><Image src="/images/sub/partner/sapura-energy.png" alt="sapura-energy" width={277} height={182}/></li>
                        <li><Image src="/images/sub/partner/Intecsa.png" alt="Intecsa" width={370} height={114}/></li>
                        <li><Image src="/images/sub/partner/petrovietnam.png" alt="petrovietnam" width={207} height={170}/></li>
                        <li><Image src="/images/sub/partner/nioc.png" alt="nioc" width={200} height={205}/></li>
                        <li><Image src="/images/sub/partner/nigc.png" alt="nigc" width={200} height={206}/></li>
                        <li><Image src="/images/sub/partner/rasgas.png" alt="rasgas" width={182} height={165}/></li>
                        <li><Image src="/images/sub/partner/oocep.png" alt="oocep" width={224} height={224}/></li>
                        <li><Image src="/images/sub/partner/aker-solutions.png" alt="aker-solutions" width={277} height={79}/></li>
                        <li><Image src="/images/sub/partner/takreer.png" alt="takreer" width={266} height={189}/></li>
                        <li><Image src="/images/sub/partner/ipsco-germany.png" alt="ipsco-germany" width={275} height={183}/></li>
                        <li><Image src="/images/sub/partner/swcc.png" alt="swcc" width={465} height={258}/></li>
                        <li><Image src="/images/sub/partner/fertil.png" alt="" width={300} height={232}/></li>
                        <li><Image src="/images/sub/partner/ttcl.png" alt="ttcl" width={147} height={220}/></li>
                        <li><Image src="/images/sub/partner/IKPT.png" alt="IKPT" width={232} height={178}/></li>
                        <li><Image src="/images/sub/partner/ADMA.png" alt="ADMA" width={261} height={165}/></li>
                        <li><Image src="/images/sub/partner/bumiarmada.png" alt="bumiarmada" width={358} height={84.13}/></li>
                        <li><Image src="/images/sub/partner/midland-refinery-company.png" alt="midland-refinery-company" width={245} height={205}/></li>
                        <li><Image src="/images/sub/partner/adco.png" alt="adco" width={340} height={201}/></li>
                        <li><Image src="/images/sub/partner/ebara.png" alt="ebara" width={153} height={162}/></li>
                    </ul>
                </div>
            </div>
            <div className="partner-map">
                <Image src="/images/sub/partner/partner-map.png" alt="KCL Middle East FZE" width={1920} height={1188}/>
            </div>
            <Footer language={language}/>
        </>
    );
}
