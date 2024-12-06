'use client';

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

interface Props {
    language?: any;
}

export default function ForgedBallValve({language}: Props) {
    const [status, setStatus] = useState<number>(0)

    return (
        <div>
            <div className="text-area">
                <div className="text-area-btn">
                    <button className={status === 0 ? 'active' : ''} onClick={() => setStatus(0)}>{language?.product_01_btn_01}</button>
                    <button className={status === 1 ? 'active' : ''} onClick={() => setStatus(1)}>{language?.product_01_btn_02}</button>
                </div>
                {status === 0 && (
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/forged/forged-ball-valve-01.png" alt="" width={586} height={619}/></p>
                            <p><Image src="/images/sub/products/forged/forged-ball-valve-02.png" alt="" width={586} height={330}/></p>
                        </div>
                        <ul>
                            <li>
                                <button>{language?.product_01_13}</button>
                                <div>
                                    {language?.product_01_14}<br/>
                                    {language?.product_01_15}<br/>
                                    {language?.product_01_16}<br/>
                                    {language?.product_01_17}<br/>
                                    {language?.product_01_18}<br/>
                                    {language?.product_01_19}<br/>
                                    {language?.product_01_20}
                                </div>
                            </li>
                            <li>
                                <button>{language?.product_01_21}</button>
                                <div>
                                    {language?.product_01_22}
                                </div>
                            </li>
                            <li>

                                <button>{language?.product_01_23}</button>
                                <div>
                                    {language?.product_01_24}<br/>
                                    {language?.product_01_25}
                                </div>
                            </li>
                            <li>
                                <button>{language?.product_01_26}</button>
                                <div>
                                    {language?.product_01_27}
                                </div>
                            </li>
                            <li>
                                <button>{language?.product_01_28}</button>
                                <div>
                                    {language?.product_01_29}
                                </div>
                            </li>
                        </ul>
                    </div>
                )}

                {status === 1 && (
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/forged/forged-ball-valve-01.png" alt="" width={586} height={619}/></p>
                            <p><Image src="/images/sub/products/forged/forged-ball-valve-02.png" alt="" width={586} height={330}/></p>
                        </div>
                        <ul>
                            <li>
                                <button>{language?.product_01_30}</button>
                                <div>
                                    {language?.product_01_31}<br/>
                                    {language?.product_01_32}<br/>
                                    {language?.product_01_33}<br/>
                                    {language?.product_01_34}<br/>
                                    {language?.product_01_35}<br/>
                                    {language?.product_01_36}<br/>
                                    {language?.product_01_37}<br/>
                                    {language?.product_01_38}
                                </div>
                            </li>
                            <li>
                                <button>{language?.product_01_39}</button>
                                <div>
                                    {language?.product_01_40}<br/>
                                    {language?.product_01_41}<br/>
                                    {language?.product_01_42}<br/>
                                    {language?.product_01_43}<br/>
                                    {language?.product_01_44}<br/>
                                    {language?.product_01_45}
                                </div>
                            </li>
                            <li>

                                <button>{language?.product_01_46}</button>
                                <div>
                                    {language?.product_01_47}<br/>
                                    {language?.product_01_48}<br/>
                                    {language?.product_01_49}<br/>
                                    {language?.product_01_50}<br/>
                                    {language?.product_01_51}
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
                <Link href="#">{language?.product_01_btn_03}</Link>
            </div>
            <div className="image-area">
                <p><Image src="/images/sub/products/forged/forged-ball-valve-01.png" alt="" width={586} height={619}/></p>
                <p><Image src="/images/sub/products/forged/forged-ball-valve-02.png" alt="" width={586} height={330}/></p>
            </div>
        </div>
    )
}
