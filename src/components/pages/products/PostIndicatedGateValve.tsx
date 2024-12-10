import Image from "next/image";
import Link from "next/link";

interface Props {
    language?: any;
}

export default function PostIndicatedGateValve({language}: Props) {
    return (
        <>
            <div>
                <div className="text-area">
                    <div className="text-area-btn">
                        <button className="active">{language?.product_07_btn_01}</button>
                    </div>
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/post/post-indicated-gate-valve-01.png" alt="" width={746} height={432}/></p>
                        </div>
                        <ul>
                            <li>
                                <dl>
                                    <dt>{language?.product_07_12}</dt>
                                    <dd>{language?.product_07_13}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_07_14}</dt>
                                    <dd>{language?.product_07_15}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_07_16}</dt>
                                    <dd>{language?.product_07_17}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_07_18}</dt>
                                    <dd>{language?.product_07_19}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_07_20}</dt>
                                    <dd>{language?.product_07_21}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_07_22}</dt>
                                    <dd>{language?.product_07_23}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_07_24}</dt>
                                    <dd>{language?.product_07_25}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_07_26}</dt>
                                    <dd>{language?.product_07_27}</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <Link href="#">{language?.product_04_btn_02}</Link>
                </div>
                <div className="image-area">
                    <p><Image src="/images/sub/products/post/post-indicated-gate-valve-01.png" alt="" width={746} height={432}/></p>
                </div>
            </div>
            <dl className="post-indicated-gate-valve-text">
                <dt>{language?.product_07_28}</dt>
                <dd>
                    <ul>
                        <li>{language?.product_07_29}</li>
                        <li>{language?.product_07_30}</li>
                        <li>{language?.product_07_31}</li>
                    </ul>
                </dd>
            </dl>
        </>
    )
}
