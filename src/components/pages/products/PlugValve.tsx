'use client';

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

interface Props {
    language?: any;
}

export default function PlugValve({language}: Props) {
    const [status, setStatus] = useState<number>(0);

    return (
        <div>
            <div className="text-area">
                <div className="text-area-btn">
                    <button className={status === 0 ? 'active' : ''} onClick={() => setStatus(0)}>{language?.product_03_btn_01}</button>
                    <button className={status === 1 ? 'active' : ''} onClick={() => setStatus(1)}>{language?.product_03_btn_02}</button>
                </div>
                {status === 0 && (
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/plug/plug-valve-01.png" alt="" width={586} height={440}/></p>
                        </div>
                        <ul>
                            <li>
                                <button>{language?.product_03_13}</button>
                                <div>
                                    {language?.product_03_14}
                                </div>
                            </li>
                            <li>
                                <button>{language?.product_03_15}</button>
                                <div>
                                    {language?.product_03_16}
                                </div>
                            </li>
                            <li>

                                <button>{language?.product_03_17}</button>
                                <div>
                                    {language?.product_03_18}
                                </div>
                            </li>
                            <li>
                                <button>{language?.product_03_19}</button>
                                <div>
                                    {language?.product_03_20}
                                </div>
                            </li>
                            <li>
                                <button>{language?.product_03_21}</button>
                                <div>
                                    {language?.product_03_22}<br/>
                                    {language?.product_03_23}
                                </div>
                            </li>
                        </ul>
                    </div>
                )}

                {status === 1 && (
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/plug/plug-valve-01.png" alt="" width={586} height={440}/></p>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    {language?.product_03_24}<br/>
                                    {language?.product_03_25}
                                </div>
                            </li>
                            <li>
                                <div>
                                    {language?.product_03_26}<br/>
                                    {language?.product_03_27}<br/>
                                    {language?.product_03_28}
                                </div>
                            </li>
                            <li>
                                <div>
                                    {language?.product_03_29}<br/>
                                    {language?.product_03_30}
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
                <Link href="/file/lubricated-teflon-sleeved-plug-valves-kclvalve.pdf" target="_blank">{language?.product_03_btn_03}</Link>
            </div>
            <div className="image-area">
                <p><Image src="/images/sub/products/plug/plug-valve-01.png" alt="" width={586} height={440}/></p>
            </div>
        </div>
    )
}
