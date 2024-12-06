'use client';

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    language: any;
}

export default function Certificates({language}: Props) {
    const [certificates, setCertificates] = useState<number>(0);
    return (
        <div className="container">
            <ul className="location">
                <li>{language?.header_1}</li>
                <li>{language?.header_1_6}</li>
                <li>{certificates === 0 ? language?.certificates_02 : language?.certificates_03}</li>
            </ul>
            <div className="title-area1">
                <h2>{language?.certificates_01}</h2>
            </div>
            <div className="certificates">
                <div className="certificates-btns">
                    <button className={certificates === 0 ? 'active' : 'on'} onClick={() => setCertificates(0)}>{language?.certificates_02}</button>
                    <button className={certificates === 1 ? 'active' : 'on'} onClick={() => setCertificates(1)}>{language?.certificates_03}</button>
                </div>
                {certificates === 0 && (
                    <section className="vendor">
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/iran.png" alt="IRAN" width={228} height={120}/>
                                <p>{language?.certificates_04_01}</p>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_04_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_04_03}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_04_04}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_04_05}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/uae.png" alt="UAE" width={228} height={120}/>
                                <p>{language?.certificates_05_01}</p>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_05_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_05_03}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_05_04}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_05_05}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_05_06}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_05_07}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_05_08}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/qatar.png" alt="IRAN" width={228} height={120}/>
                                <p>{language?.certificates_06_01}</p>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_06_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/saudi-arabia.png" alt="SAUDI ARABIA" width={228} height={120}/>
                                <p>{language?.certificates_07_01}</p>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_07_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/indonesia.png" alt="INDONESIA" width={228} height={120}/>
                                <p>{language?.certificates_08_01}</p>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_08_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/malaysia.png" alt="MALAYSIA" width={228} height={120}/>
                                <p>{language?.certificates_09_01}</p>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_09_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                    </section>
                )}
                {certificates === 1 && (
                    <section className="quality">
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/sgs_logo.png" alt="SGS" width={260} height={121}/>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_10_01}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_10_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/ce-logo.png" alt="CE" width={147} height={105}/>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_11_01}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/lolyd-resiger_logo.png" alt="Lolyd's Resister" width={260} height={135}/>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_12_01}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/velosi_logo.png" alt="Velosi" width={238} height={173}/>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_13_01}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_13_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_13_03}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/pts_logo.png" alt="PTS" width={260} height={100}/>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_14_01}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_03}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_04}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_05}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_06}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_07}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_08}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_09}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_10}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_11}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_14_12}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <Image src="/images/sub/certificates/tuv_logo.png" alt="TUV" width={278} height={154}/>
                            </dt>
                            <dd>
                                <ul>
                                    <li>{language?.certificates_15_01}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_15_02}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_15_03}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_15_04}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                    <li>{language?.certificates_15_05}<Link href="#">{language?.certificates_btn_02}</Link></li>
                                </ul>
                            </dd>
                        </dl>
                    </section>
                )}
            </div>
        </div>
    )
}
