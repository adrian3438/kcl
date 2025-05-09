'use client';

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

interface Props {
    language?: any;
}

export default function KnifeGateValve({language}: Props) {
    const [subStatus, setSubStatus] = useState<number>(0);

    return (
        <>
            <div>
                <div className="text-area">
                    <div className="text-area-btn text-area-btn2">
                        <button className='active'>{language?.product_08_btn_01}</button>
                    </div>
                    <div className="text-area-detail">
                        <div className="text-area-sub-tab">
                            <button onClick={() => setSubStatus(0)} className={subStatus === 0 ? "active" : ""}>{language?.product_08_13}</button>
                            <button onClick={() => setSubStatus(1)} className={subStatus === 1 ? "active" : ""}>{language?.product_08_14}</button>
                            <button onClick={() => setSubStatus(2)} className={subStatus === 2 ? "active" : ""}>{language?.product_08_15}</button>
                        </div>
                        {subStatus === 0 && (
                            <ul>
                                <li>
                                    <div>
                                        {language?.product_08_16}<br/>
                                        {language?.product_08_17}
                                    </div>
                                </li>
                                <li>
                                    <button>{language?.product_08_18}</button>
                                    <div>
                                        {language?.product_08_19}<br/>
                                        {language?.product_08_20}<br/>
                                        {language?.product_08_21}<br/>
                                        {language?.product_08_22}<br/>
                                        {language?.product_08_23}
                                    </div>
                                </li>
                                <li>
                                    <button>{language?.product_08_24}</button>
                                    <div>
                                        {language?.product_08_25}<br/>
                                        {language?.product_08_26}<br/>
                                        {language?.product_08_27}<br/>
                                        {language?.product_08_28}
                                    </div>
                                </li>
                                <li>
                                    <button>{language?.product_08_29}</button>
                                    <div>
                                        {language?.product_08_30}<br/>
                                        {language?.product_08_31}<br/>
                                        {language?.product_08_32}<br/>
                                        {language?.product_08_33}
                                    </div>
                                </li>
                            </ul>
                        )}
                        {subStatus === 1 && (
                            <ul>
                                <li>
                                    <div>
                                        {language?.product_08_34}<br/>
                                        {language?.product_08_35}<br/>
                                        {language?.product_08_36}
                                    </div>
                                </li>
                                <li>
                                    <button>{language?.product_08_37}</button>
                                    <div>
                                        {language?.product_08_38}<br/>
                                        {language?.product_08_39}<br/>
                                        {language?.product_08_40}<br/>
                                        {language?.product_08_41}<br/>
                                        {language?.product_08_42}
                                    </div>
                                </li>
                                <li>
                                    <button>{language?.product_08_43}</button>
                                    <div>
                                        {language?.product_08_44}<br/>
                                        {language?.product_08_45}
                                    </div>
                                </li>
                                <li>
                                    <button>{language?.product_08_46}</button>
                                    <div>
                                        {language?.product_08_47}<br/>
                                        {language?.product_08_48}<br/>
                                        {language?.product_08_49}<br/>
                                        {language?.product_08_50}
                                    </div>
                                </li>
                            </ul>
                        )}
                        {subStatus === 2 && (
                            <ul>
                                <li>
                                    <button>{language?.product_08_51}</button>
                                    <div>
                                        {language?.product_08_52}<br/>
                                        {language?.product_08_53}<br/>
                                        {language?.product_08_54}<br/>
                                        {language?.product_08_55}
                                    </div>
                                </li>
                                <li>
                                    <button>{language?.product_08_56}</button>
                                    <div>
                                        {language?.product_08_57}
                                    </div>
                                </li>
                                <li>
                                    <button>{language?.product_08_58}</button>
                                    <div>
                                        {language?.product_08_59}<br/>
                                        {language?.product_08_60}<br/>
                                        {language?.product_08_61}<br/>
                                        {language?.product_08_62}
                                    </div>
                                </li>
                            </ul>
                        )}
                    </div>
                    {subStatus === 0 && <Link href="/file/knife-gate_softseatkgv.pdf" target="_blank">{language?.product_08_btn_02}</Link>}
                    {subStatus === 1 && <Link href="/file/knife-gate_metalseatkgv.pdf" target="_blank">{language?.product_08_btn_02}</Link>}
                    {/*{subStatus === 2 && <Link href="#">{language?.product_08_btn_02}</Link>}*/}

                </div>
                <div className="image-area">
                    {subStatus === 0 && <p><Image src="/images/sub/products/knife/knife-gate-valve.gif" alt="" width={471} height={853}/></p>}
                    {subStatus === 1 && <p><Image src="/images/sub/products/knife/knife-gate-valve-05.jpg" alt="" width={284} height={699}/></p>}
                    {subStatus === 2 && <p><Image src="/images/sub/products/knife/knife-gate-valve-06.jpg" alt="" width={159} height={419}/></p>}
                </div>
            </div>
            <div className="knife-valve-image">
                {subStatus === 0 && (
                    <>
                        <p><Image src="/images/sub/products/knife/knife-gate-valve-02.png" alt="" width={1100} height={1057}/></p>
                        <p><Image src="/images/sub/products/knife/knife-gate-valve-03.png" alt="" width={1100} height={619}/></p>
                        <p><Image src="/images/sub/products/knife/knife-gate-valve-04.png" alt="" width={1100} height={283}/></p>
                    </>
                )}
                {subStatus === 1 && (
                    <>
                        <p><Image src="/images/sub/products/knife/knife-gate-valve-07.jpg" alt="" width={1000} height={591}/></p>
                        <p><Image src="/images/sub/products/knife/knife-gate-valve-08.jpg" alt="" width={1000} height={258}/></p>
                    </>
                )}
                {subStatus === 2 && (
                    <>
                        <p><Image src="/images/sub/products/knife/knife-gate-valve-09.jpg" alt="" width={1100} height={619}/></p>
                        <p><Image src="/images/sub/products/knife/knife-gate-valve-10.jpg" alt="" width={1100} height={283}/></p>
                    </>
                )}
            </div>
        </>
    )
}
