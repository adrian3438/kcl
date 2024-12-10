import Image from "next/image";
import Link from "next/link";


interface Props {
    language?: any;
}

export default function ButterflyValve({language}: Props) {
    return (
        <>
            <div>
                <div className="text-area">
                    <div className="text-area-btn">
                        <button className="active">{language?.product_05_btn_01}</button>
                    </div>
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/butterfly/butterfly-valve-01.png" alt="" width={872} height={651}/></p>
                        </div>
                        <ul>
                            <li>
                                <dl>
                                    <dt>{language?.product_05_13}</dt>
                                    <dd>{language?.product_05_14}<br/>
                                        {language?.product_05_15}<br/>
                                        {language?.product_05_16}<br/>
                                        {language?.product_05_17}<br/>
                                        {language?.product_05_18}
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_05_19}</dt>
                                    <dd>{language?.product_05_20}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_05_21}</dt>
                                    <dd>{language?.product_05_22}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_05_23}</dt>
                                    <dd>
                                        <strong>{language?.product_05_24}</strong><br/>
                                        {language?.product_05_25}<br/>
                                        <strong>{language?.product_05_26}</strong><br/>
                                        {language?.product_05_27}<br/>
                                        <strong>{language?.product_05_28}</strong><br/>
                                        {language?.product_05_29}<br/>
                                        <strong>{language?.product_05_30}</strong><br/>
                                        {language?.product_05_31}<br/>
                                        <strong>{language?.product_05_32}</strong><br/>
                                        {language?.product_05_33}<br/>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                            <dl>
                                    <dt>{language?.product_05_34}</dt>
                                    <dd>{language?.product_05_35}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_05_36}</dt>
                                    <dd>{language?.product_05_37}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_05_38}</dt>
                                    <dd>{language?.product_05_39}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_05_40}</dt>
                                    <dd>{language?.product_05_41}</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <Link href="#">{language?.product_05_btn_02}</Link>
                </div>
                <div className="image-area">
                    <p><Image src="/images/sub/products/butterfly/butterfly-valve-01.png" alt="" width={872} height={651}/></p>
                </div>
            </div>
        </>
    )
}
