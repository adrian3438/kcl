'use client';

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

interface Props {
    language?: any;
}

export default function PlugValve2({language}: Props) {
    const [status, setStatus] = useState<number>(0);

    return (
        <div>
            <div className="text-area">
                <div className="text-area-btn">
                    <button className={status === 0 ? 'active' : ''} onClick={() => setStatus(0)}>{language?.product_03_btn_04}</button>
                    <button className={status === 1 ? 'active' : ''} onClick={() => setStatus(1)}>{language?.product_03_btn_05}</button>
                </div>
                {status === 0 && (
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/plug/plug-valve-02.png" alt="" width={586} height={440}/></p>
                        </div>
                        <ul>
                            <li>
                                <button>{language?.product_03_32}</button>
                                <div>
                                    {language?.product_03_33}<br/>
                                    {language?.product_03_34}<br/>
                                    {language?.product_03_35}
                                </div>
                            </li>
                            <li>
                                <button>{language?.product_03_36}</button>
                                <div>
                                    {language?.product_03_37}
                                </div>
                            </li>
                            <li>

                                <button>{language?.product_03_38}</button>
                                <div>
                                    {language?.product_03_39}<br/>
                                    {language?.product_03_40}<br/>
                                    {language?.product_03_41}<br/>
                                    {language?.product_03_42}
                                </div>
                            </li>
                        </ul>
                    </div>
                )}

                {status === 1 && (
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/plug/plug-valve-02.png" alt="" width={586} height={440}/></p>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    {language?.product_03_43}<br/>
                                    {language?.product_03_44}<br/>
                                    {language?.product_03_45}
                                </div>
                            </li>
                            <li>
                                <div>
                                    {language?.product_03_46}<br/>
                                    {language?.product_03_47}<br/>
                                    {language?.product_03_48}<br/>
                                    {language?.product_03_49}<br/>
                                    {language?.product_03_50}
                                </div>
                            </li>
                            <li>
                                <div>
                                    {language?.product_03_51}
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
                <Link href="/file/non-lubricated-teflon-sleeved-plug-valves-kclvalve.pdf" target="_blank">{language?.product_03_btn_03}</Link>
            </div>
            <div className="image-area">
                <p><Image src="/images/sub/products/plug/plug-valve-02.png" alt="" width={586} height={440}/></p>
            </div>
        </div>
    )
}
