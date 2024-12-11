'use client';

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

interface Props {
    language?: any;
}

export default function CastedBallValve({language}: Props) {
    const [status, setStatus] = useState<number>(0);
    const [subStatus, setSubStatus] = useState<number>(0);

    return (
        <div>
            <div className="text-area">
                <div className="text-area-btn">
                    <button className={status === 0 ? 'active' : ''} onClick={() => setStatus(0)}>{language?.product_02_btn_01}</button>
                    <button className={status === 1 ? 'active' : ''} onClick={() => setStatus(1)}>{language?.product_02_btn_02}</button>
                </div>
                {status === 0 && (
                    <div className="text-area-detail">
                        <div className="text-area-sub-tab">
                            <button onClick={() => setSubStatus(0)} className={subStatus === 0 ? "active" : ""}>{language?.product_02_tab_01}</button>
                            <button onClick={() => setSubStatus(1)} className={subStatus === 1 ? "active" : ""}>{language?.product_02_tab_02}</button>
                            <button onClick={() => setSubStatus(2)} className={subStatus === 2 ? "active" : ""}>{language?.product_02_tab_03}</button>
                            <button onClick={() => setSubStatus(3)} className={subStatus === 3 ? "active" : ""}>{language?.product_02_tab_04}</button>
                            <button onClick={() => setSubStatus(4)} className={subStatus === 4 ? "active" : ""}>{language?.product_02_tab_05}</button>
                            <button onClick={() => setSubStatus(5)} className={subStatus === 5 ? "active" : ""}>{language?.product_02_tab_06}</button>
                        </div>
                        {subStatus === 0 && (
                            <ul>
                                <li>
                                    <p>{language?.product_02_13}</p>
                                    <div>
                                        {language?.product_02_14}<br/>
                                        {language?.product_02_15}<br/>
                                        {language?.product_02_16}<br/>
                                        {language?.product_02_17}
                                    </div>
                                    <Image src="/images/sub/products/casted/casted-ball-valve-feature-01.png" alt="" width={390} height={257}/>
                                </li>
                            </ul>
                        )}
                        {subStatus === 1 && (
                            <ul>
                                <li>
                                    <p>{language?.product_02_18}</p>
                                    <div>
                                        {language?.product_02_19}<br/>
                                        {language?.product_02_20}
                                    </div>
                                    <Image src="/images/sub/products/casted/casted-ball-valve-feature-02.png" alt="" width={390} height={257}/>
                                </li>
                            </ul>
                        )}
                        {subStatus === 2 && (
                            <ul>
                                <li>
                                    <p>{language?.product_02_21}</p>
                                    <div>
                                        {language?.product_02_22}<br/>
                                        {language?.product_02_23}
                                    </div>
                                    <Image src="/images/sub/products/casted/casted-ball-valve-feature-03.png" alt="" width={390} height={257}/>
                                </li>
                            </ul>
                        )}
                        {subStatus === 3 && (
                            <ul>
                                <li>
                                    <p>{language?.product_02_24}</p>
                                    <div>
                                        {language?.product_02_25}<br/>
                                        {language?.product_02_26}<br/>
                                        {language?.product_02_27}
                                    </div>
                                    <Image src="/images/sub/products/casted/casted-ball-valve-feature-04.png" alt="" width={390} height={257}/>
                                </li>
                            </ul>
                        )}
                        {subStatus === 4 && (
                            <ul>
                                <li>
                                    <p>{language?.product_02_28}</p>
                                    <div>
                                        {language?.product_02_29}<br/>
                                        {language?.product_02_30}<br/>
                                        {language?.product_02_31}
                                    </div>
                                    <Image src="/images/sub/products/casted/casted-ball-valve-feature-05.png" alt="" width={390} height={257}/>
                                </li>
                            </ul>
                        )}
                        {subStatus === 5 && (
                            <ul>
                                <li>
                                    <p>{language?.product_02_32}</p>
                                    <div>
                                        {language?.product_02_33}<br/>
                                        {language?.product_02_34}<br/>
                                        {language?.product_02_35}
                                    </div>
                                    <Image src="/images/sub/products/casted/casted-ball-valve-feature-06.png" alt="" width={390} height={257}/>
                                </li>
                            </ul>
                        )}
                    </div>
                )}

                {status === 1 && (
                    <div className="text-area-detail">
                        <ul>
                            <li>
                                <dl>
                                    <dt>{language?.product_02_36}</dt>
                                    <dd>{language?.product_02_37}<br/>
                                        {language?.product_02_38}<br/>
                                        {language?.product_02_39}<br/>
                                        {language?.product_02_40}<br/>
                                        {language?.product_02_41}
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_02_42}</dt>
                                    <dd>{language?.product_02_43}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_02_44}</dt>
                                    <dd>{language?.product_02_45}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_02_46}</dt>
                                    <dd>{language?.product_02_47}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_02_48}</dt>
                                    <dd>{language?.product_02_49}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_02_50}</dt>
                                    <dd>{language?.product_02_51}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_02_52}</dt>
                                    <dd>{language?.product_02_53}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_02_54}</dt>
                                    <dd>{language?.product_02_55}</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                )}
                <Link href="/file/CastingBallValve.pdf" target="_blank">{language?.product_01_btn_03}</Link>
            </div>
            <div className="image-area">
                <p><Image src="/images/sub/products/casted/casted-ball-valve-01.png" alt="" width={588} height={784}/></p>
            </div>
        </div>
    )
}
