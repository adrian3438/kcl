import "@/assets/about-us/history.scss";
import Image from "next/image";

interface Props {
    language: any
}

export default function History({language}: Props) {
    return (
        <>
            <div className="sub-banner" style={{background: "url(/images/sub/sub-banner-bg-02.png) no-repeat 50% 0", backgroundSize: "100% 100%"}}>
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
                                <dt>2022</dt>
                                <dd>
                                    <ul>
                                        <li><span>01.</span> {language?.history_06_01}</li>
                                        <li><span>02.</span> {language?.history_06_02}</li>
                                        <li><span>03.</span> {language?.history_06_03}</li>
                                    </ul>
                                </dd>
                            </dl>
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-02.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
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
                            <p><Image src="/images/sub/history/history-01.png" alt="" width={600} height={388}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
