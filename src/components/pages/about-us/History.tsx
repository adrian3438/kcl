import "@/assets/about-us/history.scss";
import Image from "next/image";

interface Props {
    language: any
}

export default function History({language}: Props) {
    return (
        <>
            <div className="sub-banner" style={{background: "url(/images/sub/sub-banner-bg-02.jpg) no-repeat 50% 0", backgroundSize: "100% 100%"}}>
                <div className="banner-text">
                    <div>
                        <p className="banner-text-title">{language?.history_01}</p>
                        <p className="banner-text-01">{language?.history_02}</p>
                        <p className="banner-text-02">{language?.history_03}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="title-area1">
                    <h2>{language?.history_04}</h2>
                    <p className="after">{language?.history_05}</p>
                </div>
                <div className="history">
                <div>
                        <div>
                            <dl>
                                <dt>2025</dt>
                                <dd>
                                    <ul>
                                        <li><span>02.</span> {language?.history_28_02}</li>
                                        <li><span>03.</span> {language?.history_28_03}</li>
                                        <li><span>04.</span> {language?.history_28_04}</li>
                                        <li><span>04.</span> {language?.history_28_05}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p><Image src="/images/sub/history/qatar-steel-logo.png" alt="" width={300} height={194}/>
                               <Image src="/images/sub/history/qfac_logo.png" alt="" width={299} height={80}/>
                               <Image src="/images/sub/history/qutar-petroleum-logo.png" alt="" width={300} height={105}/>
                            </p>
                        </div>
                    </div>


                <div>
                        <div>
                            <dl>
                                <dt>2024</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_06_00_00_01}</li>
                                        <li><span>03.</span> {language?.history_06_00_00_02}</li>
                                        <li><span>05.</span> {language?.history_06_00_00_03}</li>
                                        <li><span>10.</span> {language?.history_06_00_00_04}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p><Image src="/images/sub/history/history-pln-indonesia-power.jpg" alt="" width={662} height={165}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2023</dt>
                                <dd>
                                    <ul>
                                        <li><span>02.</span> {language?.history_06_00_01}</li>
                                        <li><span>04.</span> {language?.history_06_00_02}</li>
                                        <li><span>05.</span> {language?.history_06_00_03}</li>
                                        <li><span>09.</span> {language?.history_06_00_04}</li>
                                        <li><span>11.</span> {language?.history_06_00_05}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <br/>
                            <div><Image src="/images/sub/history/history-ped-ce.jpg" alt="" width={234} height={102}/><Image src="/images/sub/history/history-lsp.jpg" alt="" width={234} height={87}/></div>
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2022</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_06_01}</li>
                                        <li><span>02.</span> {language?.history_06_02}</li>
                                        <li><span>03.</span> {language?.history_06_03}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-petronas.jpg" alt="" width={234} height={102} style={{width:"215px", height:"83px"}}/><Image src="/images/sub/history/history-Mitsui_ES.jpg" alt="" width={234} height={87} style={{width:"191px", height:"103px"}}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2021</dt>
                                <dd>
                                    <ul>
                                        <li><span>07.</span> {language?.history_07_01}</li>
                                        <li><span>06.</span> {language?.history_07_02}</li>
                                        <li><span>09.</span> {language?.history_07_03}</li>
                                        <li><span>11.</span> {language?.history_07_04}</li>
                                        <li><span>12.</span> {language?.history_07_05}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-ttcl.jpg" alt="" width={88} height={131} style={{width:"130px", height:"180px"}}/><Image src="/images/sub/history/history-chevron.jpg" alt="" width={234} height={87} style={{width:"180px", height:"200px"}}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2020</dt>
                                <dd>
                                    <ul>
                                        <li><span>02.</span> {language?.history_08_01}</li>
                                        <li><span>04.</span> {language?.history_08_02}</li>
                                        <li><span>09.</span> {language?.history_08_03}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p><Image src="/images/sub/history/history-sapura-energy.jpg" alt="" width={600} height={388}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2019</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_09_01}</li>
                                        <li><span>02.</span> {language?.history_09_02}</li>
                                        <li><span>03.</span> {language?.history_09_03}</li>
                                        <li><span>04.</span> {language?.history_09_04}</li>
                                        <li><span>05.</span> {language?.history_09_05}</li>
                                        <li><span>06.</span> {language?.history_09_06}</li>
                                        <li><span>08.</span> {language?.history_09_07}</li>
                                        <li><span>11.</span> {language?.history_09_08}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-sabic.jpg" alt="" width={88} height={131} style={{width:"198px", height:"115px"}}/>
                            <Image src="/images/sub/history/history-korea-energy.jpg" alt="" width={234} height={87} style={{width:"200px", height:"131px"}}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2018</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_10_01}</li>
                                        <li><span>02.</span> {language?.history_10_02}</li>
                                        <li><span>03.</span> {language?.history_10_03}</li>
                                        <li><span>04.</span> {language?.history_10_04}</li>
                                        <li><span>05.</span> {language?.history_10_05}</li>
                                        <li><span>08.</span> {language?.history_10_06}</li>
                                        <li><span>10.</span> {language?.history_10_07}</li>
                                        <li><span>11.</span> {language?.history_10_08}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-petronas.jpg" alt="" width={88} height={131} style={{width:"220px", height:"90px"}}/>
                            <Image src="/images/sub/history/history-dbp.jpg" alt="" width={234} height={87} style={{width:"200px", height:"100px"}}/>
                            <Image src="/images/sub/history/history-gs-caltex.jpg" alt="" width={234} height={87} style={{width:"260px", height:"80px"}}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2017</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_11_01}</li>
                                        <li><span>02.</span> {language?.history_11_02}</li>
                                        <li><span>03.</span> {language?.history_11_03}</li>
                                        <li><span>06.</span> {language?.history_11_04}</li>
                                        <li><span>08.</span> {language?.history_11_05}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-IHI.jpg" alt="" width={88} height={131} style={{width:"220px", height:"90px"}}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2016</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_12_01}</li>
                                        <li><span>04.</span> {language?.history_12_02}</li>
                                        <li><span>06.</span> {language?.history_12_03}</li>
                                        <li><span>06.</span> {language?.history_12_04}</li>
                                        <li><span>10.</span> {language?.history_12_05}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-rasgas.jpg" alt="" width={88} height={131} style={{width:"110px", height:"100px"}}/>
                            <Image src="/images/sub/history/history-hitachi.jpg" alt="" width={234} height={200} style={{width:"200px", height:"80x"}}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2015</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_13_01}<br/>{language?.history_13_02}</li>
                                        <li><span>04.</span> {language?.history_13_03}</li>
                                        <li><span>05.</span> {language?.history_13_04}</li>
                                        <li><span>05.</span> {language?.history_13_05}</li>
                                        <li><span>05.</span> {language?.history_13_06}</li>
                                        <li><span>06.</span> {language?.history_13_07}</li>
                                        <li><span>08.</span> {language?.history_13_08}</li>
                                        <li><span>08.</span> {language?.history_13_09}</li>
                                        <li><span>10.</span> {language?.history_13_10}</li>
                                        <li><span>11.</span> {language?.history_13_11}</li>
                                        <li><span>12.</span> {language?.history_13_12}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-aker-solutions.png" alt="" width={88} height={131} style={{width:"225px", height:"70px"}}/>
                            <Image src="/images/sub/history/history-samsung.jpg" alt="" width={234} height={87} style={{width:"220px", height:"90px"}}/>
                            <Image src="/images/sub/history/history-kolon.jpg" alt="" width={234} height={87} style={{width:"260px", height:"80px"}}/>
                            <Image src="/images/sub/history/history-italian-thai.jpg" alt="" width={234} height={87} style={{width:"230px", height:"90px"}}/>
                            <Image src="/images/sub/history/history-adma.jpg" alt="" width={234} height={87} style={{width:"200px", height:"90px"}}/>
                            <Image src="/images/sub/history/history-korea-air-force.jpg" alt="" width={234} height={87} style={{width:"190px", height:"170px"}}/>
                            <Image src="/images/sub/history/history-adco.jpg" alt="" width={234} height={87} style={{width:"260px", height:"150px"}}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2014</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_14_01}</li>
                                        <li><span>02.</span> {language?.history_14_02}</li>
                                        <li><span>03.</span> {language?.history_14_03}</li>
                                        <li><span>04.</span> {language?.history_14_04}</li>
                                        <li><span>05.</span> {language?.history_14_05}</li>
                                        <li><span>06.</span> {language?.history_14_06}</li>
                                        <li><span>12.</span> {language?.history_14_07}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-petronas.jpg" alt="" width={88} height={131} style={{width:"215px", height:"83px"}}/>
                            <Image src="/images/sub/history/history-intecsa.jpg" alt="" width={234} height={87} style={{width:"200px", height:"70px"}}/>
                            <Image src="/images/sub/history/history-adgas.jpg" alt="" width={234} height={87} style={{width:"230px", height:"100px"}}/>
                            <Image src="/images/sub/history/history-zolanIran.jpg" alt="" width={234} height={87} style={{width:"130px", height:"50px"}}/>
                            <Image src="/images/sub/history/history-samsung-eng.png" alt="" width={234} height={87} style={{width:"400px", height:"50px"}}/>
                            <Image src="/images/sub/history/history-nioec.jpg" alt="" width={234} height={87} style={{width:"130px", height:"130px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2013</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_15_01}</li>
                                        <li><span>03.</span> {language?.history_15_02}</li>
                                        <li><span>04.</span> {language?.history_15_03}</li>
                                        <li><span>05.</span> {language?.history_15_04}</li>
                                        <li><span>06.</span> {language?.history_15_05}<br/>
                                            {language?.history_15_06}<br/>
                                            {language?.history_15_07}<br/>
                                            {language?.history_15_08}
                                        </li>
                                        <li><span>07.</span> {language?.history_15_09}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-ooce.jpg" alt="" width={88} height={131} style={{width:"170px", height:"170px"}}/>
                            <Image src="/images/sub/history/history-iraq.jpg" alt="" width={234} height={87} style={{width:"170px", height:"130px"}}/>
                            <Image src="/images/sub/history/history-saline-water-conversion-corporation.jpg" alt="" width={234} height={87} style={{width:"130px", height:"130px"}}/>
                            <Image src="/images/sub/history/history-takreer.jpg" alt="" width={234} height={87} style={{width:"200px", height:"170px"}}/>
                            <Image src="/images/sub/history/history-fertil.jpg" alt="" width={234} height={87} style={{width:"200px", height:"80px"}}/>
                            <Image src="/images/sub/history/history-IKPT.jpg" alt="" width={234} height={87} style={{width:"100px", height:"80px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2012</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_16_01}</li>
                                        <li><span>05.</span> {language?.history_16_02}</li>
                                        <li><span>09.</span> {language?.history_16_03}</li>
                                        <li><span>10.</span> {language?.history_16_04}</li>
                                        <li><span>11.</span> {language?.history_16_05}</li>
                                        <li><span>12.</span> {language?.history_16_06}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-sk-construction.jpg" alt="" width={88} height={131} style={{width:"140px", height:"100px"}}/>
                            <Image src="/images/sub/history/history-ebara.jpg" alt="" width={234} height={87} style={{width:"110px", height:"110px"}}/>
                            <Image src="/images/sub/history/history-korea-air-force.jpg" alt="" width={234} height={87} style={{width:"150px", height:"110px"}}/>
                            <Image src="/images/sub/history/history-hitachi.jpg" alt="" width={234} height={87} style={{width:"180px", height:"50px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2011</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_17_01}</li>
                                        <li><span>03.</span> {language?.history_17_02}</li>
                                        <li><span>03.</span> {language?.history_17_03}</li>
                                        <li><span>04.</span> {language?.history_17_04}</li>
                                        <li><span>09.</span> {language?.history_17_05}</li>
                                        <li><span>10.</span> {language?.history_17_06}</li>
                                        <li><span>11.</span> {language?.history_17_07}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-cert.jpg" alt="" width={88} height={131} style={{width:"100px", height:"130px"}}/>
                            <Image src="/images/sub/history/history-cert2.jpg" alt="" width={234} height={87} style={{width:"130px", height:"130px"}}/>
                            <Image src="/images/sub/history/history-Petrovietnam.jpg" alt="" width={234} height={87} style={{width:"170px", height:"130px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2010</dt>
                                <dd>
                                    <ul>
                                        <li><span>05.</span> {language?.history_18_01}</li>
                                        <li><span>07.</span> {language?.history_18_02}<br/>{language?.history_18_03}</li>
                                        <li><span>12.</span> {language?.history_18_04}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-posco.jpg" alt="" width={88} height={131} style={{width:"180px", height:"90px"}}/>
                            <Image src="/images/sub/history/history-ipsco.jpg" alt="" width={234} height={87} style={{width:"150px", height:"100px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2009</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_19_01}<br/>{language?.history_19_02}<br/>{language?.history_19_03}</li>
                                        <li><span>06.</span> {language?.history_19_04}</li>
                                        <li><span>09.</span> {language?.history_19_05}</li>
                                        <li><span>09.</span> {language?.history_19_06}</li>
                                        <li><span>12.</span> {language?.history_19_07}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-hksilicon.jpg" alt="" width={88} height={131} style={{width:"170px", height:"60px"}}/>
                            <Image src="/images/sub/history/history-daewoo-ec.jpg" alt="" width={234} height={87} style={{width:"330px", height:"60px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2008</dt>
                                <dd>
                                    <ul>
                                        <li><span>06.</span> {language?.history_20_01}</li>
                                        <li><span>07.</span> {language?.history_20_02}</li>
                                        <li><span>12.</span> {language?.history_20_03}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p><Image src="/images/sub/history/history-bumiarmada.jpg" alt="" width={600} height={388}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2007</dt>
                                <dd>
                                    <ul>
                                        <li><span>03.</span> {language?.history_21_01}</li>
                                        <li><span>06.</span> {language?.history_21_02}</li>
                                        <li><span>07.</span> {language?.history_21_03}</li>
                                        <li><span>10.</span> {language?.history_21_04}</li>
                                        <li><span>11.</span> {language?.history_21_05}</li>
                                        <li><span>12.</span> {language?.history_21_06}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-doosan.jpg" alt="" width={88} height={131} style={{width:"200px", height:"70px"}}/>
                            <Image src="/images/sub/history/history-kolon.jpg" alt="" width={234} height={87} style={{width:"200px", height:"70px"}}/>
                            <Image src="/images/sub/history/history-sk-construction.jpg" alt="" width={234} height={87} style={{width:"170px", height:"130px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2006</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_22_01}</li>
                                        <li><span>06.</span> {language?.history_22_02}</li>
                                        <li><span>11.</span> {language?.history_22_03}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-kcc.jpg" alt="" width={88} height={131} style={{width:"200px", height:"100px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2005</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_23_01}</li>
                                        <li><span>02.</span> {language?.history_23_02}</li>
                                        <li><span>05.</span> {language?.history_23_03}</li>
                                        <li><span>09.</span> {language?.history_23_04}</li>
                                        <li><span>10.</span> {language?.history_23_05}</li>
                                        <li><span>12.</span> {language?.history_23_06}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-posco.jpg" alt="" width={88} height={131} style={{width:"200px", height:"70px"}}/>
                            <Image src="/images/sub/history/history-sk-construction.jpg" alt="" width={234} height={87} style={{width:"170px", height:"130px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2004</dt>
                                <dd>
                                    <ul>
                                        <li><span>03.</span> {language?.history_24_01}</li>
                                        <li><span>03.</span> {language?.history_24_02}</li>
                                        <li><span>03.</span> {language?.history_24_03}</li>
                                        <li><span>06.</span> {language?.history_24_04}</li>
                                        <li><span>07.</span> {language?.history_24_05}</li>
                                        <li><span>09.</span> {language?.history_24_06}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-posco.jpg" alt="" width={88} height={131} style={{width:"200px", height:"70px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2003</dt>
                                <dd>
                                    <ul>
                                        <li><span>06.</span> {language?.history_25_01}</li>
                                        <li><span>08.</span> {language?.history_25_02}</li>
                                        <li><span>09.</span> {language?.history_25_03}</li>
                                        <li><span>11.</span> {language?.history_25_04}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-daewoo-ec.jpg" alt="" width={88} height={131} style={{width:"200px", height:"70px"}}/>
                            <Image src="/images/sub/history/history-sk-construction.jpg" alt="" width={234} height={87} style={{width:"170px", height:"130px"}}/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2002</dt>
                                <dd>
                                    <ul>
                                        <li><span>09.</span> {language?.history_26_01}</li>
                                        <li><span>10.</span> {language?.history_26_02}</li>
                                        <li><span>10.</span> {language?.history_26_03}</li>
                                        <li><span>12.</span> {language?.history_26_04}</li>
                                        <li><span>12.</span> {language?.history_26_05}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-kcc.jpg" alt="" width={88} height={131} style={{width:"200px", height:"100px"}}/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>2001</dt>
                                <dd>
                                    <ul>
                                        <li><span>11.</span> {language?.history_27_01}</li>
                                        <li><span>11.</span> {language?.history_27_02}</li>
                                        <li><span>11.</span> {language?.history_27_03}</li>
                                        <li><span>11.</span> {language?.history_27_04}</li>
                                        <li><span>12.</span> {language?.history_27_05}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p style={{maxWidth: "none"}}><Image src="/images/sub/history/history-toyoEngineering.jpg" alt="" width={88} height={131} style={{width:"150px", height:"150px"}}/>
                            <Image src="/images/sub/history/history-dsme.jpg" alt="" width={234} height={87} style={{width:"300px", height:"130px"}}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
