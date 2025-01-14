import "@/assets/about-us/partner.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";
import PartnerSwiper from "@/components/pages/about-us/PartnerSwiper";

export default async function Certificates({searchParams : {lang}} : any) {
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
                <div className="partner">

                <div className="title-area3">
                    <p>{language?.partner_08}</p>
                    <ul className="image-area1">
                    <li><Image src="/images/sub/partner/Corporate Clients Domestic Major EPCs.png" alt="Corporate Clients Domestic Major EPCs" width={1601} height={630}/></li>
                    </ul>
                </div>

                <div className="title-area3">
                    <p>{language?.partner_09}</p>
                    <ul className="image-area1">
                    <li><Image src="/images/sub/partner/Corporate Clients Domestic Partners.png" alt="Corporate Clients Domestic Partners" width={1601} height={630}/></li>
                    </ul>
                </div>

                <div className="title-area3">
                    <p>{language?.partner_10}</p>
                    <ul className="image-area1">
                    <li><Image src="/images/sub/partner/Corporate Clients Overseas – MIDDLE EAST.png" alt="Corporate Clients Overseas – MIDDLE EAST" width={1601} height={630}/></li>
                    </ul>                    
                </div>

                <div className="title-area3">
                    <p>{language?.partner_11}</p>
                    <ul className="image-area1">
                    <li><Image src="/images/sub/partner/Corporate Clients Overseas- USA.png" alt="Corporate Clients Overseas- USA" width={1601} height={127}/></li>
                    </ul>
                </div>

                <div className="title-area3">
                    <p>{language?.partner_12}</p>
                    <ul className="image-area1">
                    <li><Image src="/images/sub/partner/Corporate Clients Overseas – IRAN.png" alt="Corporate Clients Overseas – IRAN" width={1601} height={229}/></li>
                    </ul>
                </div>

                <div className="title-area3">
                    <p>{language?.partner_13}</p>
                    <ul className="image-area1">
                    <li><Image src="/images/sub/partner/Corporate Clients Overseas JAPAN.png" alt="Corporate Clients Overseas JAPAN" width={1601} height={630}/></li>
                    </ul>
                </div>

                <div className="title-area3">
                    <p>{language?.partner_14}</p>
                    <ul className="image-area1">
                    <li><Image src="/images/sub/partner/Corporate Clients Overseas OTHERS.png" alt="Corporate Clients Overseas OTHERS" width={1601} height={478}/></li>
                    <li><Image src="/images/sub/partner/Corporate Clients Overseas OTHERS2.png" alt="Corporate Clients Overseas OTHERS" width={1601} height={223}/></li>
                    </ul>
                </div>
                <div className="title-area3">
                </div>
              </div>
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
