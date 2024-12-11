'use client';

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

interface Props {
    language?: any;
}

export default function CastingValve({language}: Props) {
    const [status, setStatus] = useState<number>(0);

    return (
        <>
            <div>
                <div className="text-area">
                    <div className="text-area-btn">
                        <button className="active">{language?.product_04_btn_01}</button>
                    </div>
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/casting/casting-valve-01.png" alt="" width={405} height={784}/></p>
                        </div>
                        <ul>
                            <li>
                                <dl>
                                    <dt>{language?.product_04_13}</dt>
                                    <dd>{language?.product_04_14}<br/>
                                        {language?.product_04_15}<br/>
                                        {language?.product_04_16}<br/>
                                        {language?.product_04_17}<br/>
                                        {language?.product_04_18}
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_04_19}</dt>
                                    <dd>{language?.product_04_20}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_04_21}</dt>
                                    <dd>{language?.product_04_22}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_04_23}</dt>
                                    <dd>{language?.product_04_24}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_04_25}</dt>
                                    <dd>{language?.product_04_26}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_04_27}</dt>
                                    <dd>{language?.product_04_28}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_04_29}</dt>
                                    <dd>{language?.product_04_30}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_04_31}</dt>
                                    <dd>{language?.product_04_32}</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <Link href="/file/castingvalvega-gl-ch.pdf" target="_blank">{language?.product_04_btn_02}</Link>
                    <Link href="/file/castingballvalve-technical-data.pdf" target="_blank" className="margin-button">{language?.product_04_btn_03}</Link>
                </div>
                <div className="image-area">
                    <p><Image src="/images/sub/products/casting/casting-valve-01.png" alt="" width={405} height={784}/></p>
                </div>
            </div>
            <div className="text-table">
                <div className="table-btn">
                    <button className={status === 0 ? "active" : ""} onClick={() => setStatus(0)}>{language?.product_04_33}</button>
                    <button className={status === 1 ? "active" : ""} onClick={() => setStatus(1)}>{language?.product_04_34}</button>
                    <button className={status === 2 ? "active" : ""} onClick={() => setStatus(2)}>{language?.product_04_35}</button>
                </div>
                <div className="table-area">
                    {status === 0 && (
                        <>
                            <table>
                                <tbody>
                                <tr>
                                    <th scope="col" rowSpan={3}>ASME</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">150</th>
                                    <th scope="col">300</th>
                                    <th scope="col">600</th>
                                    <th scope="col">900</th>
                                    <th scope="col">1500</th>
                                    <th scope="col">2500</th>
                                </tr>
                                <tr>
                                    <th scope="row">BB</th>
                                    <td>2&#34; ~ 76&#34;</td>
                                    <td>2&#34; ~ 64&#34;</td>
                                    <td>2&#34;~ 48&#34;</td>
                                    <td>2½&#34; ~ 24&#34;</td>
                                    <td>2½&#34; ~ 24&#34;</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th scope="row">PB</th>
                                    <td>-</td>
                                    <td>-</td>
                                    <td className="bg">-</td>
                                    <td className="bg">2½&#34; ~ 24&#34;</td>
                                    <td className="bg">2½&#34; ~ 24&#34;</td>
                                    <td className="bg">2½&#34; ~ 24&#34;</td>
                                </tr>
                                </tbody>
                            </table>

                            <table>

                                <tbody>
                                <tr>
                                    <th scope="row" rowSpan={2}>KS</th>
                                    <th scope="col">10K</th>
                                    <th scope="col">20K</th>
                                    <th scope="col">30K</th>
                                    <th scope="col">40K</th>
                                    <th scope="col">63K</th>
                                </tr>
                                <tr>
                                    <td>50- 1050A</td>
                                    <td>50- 1050A</td>
                                    <td>50- 1050A</td>
                                    <td>50- 600A</td>
                                    <td>50- 400A</td>
                                </tr>
                                </tbody>
                            </table>
                        </>
                    )}

                    {status === 1 && (
                        <>
                            <table>
                                <tbody>
                                <tr>
                                    <th scope="row" rowSpan={3}>ASME</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">150</th>
                                    <th scope="col">300</th>
                                    <th scope="col">600</th>
                                    <th scope="col">900</th>
                                    <th scope="col">1500</th>
                                    <th scope="col">2500</th>
                                </tr>
                                <tr>
                                    <th scope="row">BB</th>
                                    <td>2&#34; ~ 24&#34;</td>
                                    <td>2&#34; ~ 32&#34;</td>
                                    <td>2&#34;~ 16&#34;</td>
                                    <td>2&#34; ~ 16&#34;</td>
                                    <td>2&#34; ~ 14&#34;</td>
                                </tr>
                                <tr>
                                    <th scope="row">PB</th>
                                    <td className="bg">-</td>
                                    <td className="bg">-</td>
                                    <td className="bg">-</td>
                                    <td className="bg">2&#34; ~ 14&#34;</td>
                                    <td className="bg">2&#34; ~ 14&#34;</td>
                                    <td className="bg">2&#34; ~ 14&#34;</td>
                                </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                <tr>
                                    <th scope="row" rowSpan={2}>KS</th>
                                    <th scope="col">10K</th>
                                    <th scope="col">20K</th>
                                    <th scope="col">30K</th>
                                    <th scope="col">40K</th>
                                    <th scope="col">63K</th>
                                </tr>
                                <tr>
                                    <td>50- 600A</td>
                                    <td>50- 800A</td>
                                    <td>50- 800A</td>
                                    <td>50- 350A</td>
                                    <td>50- 50A</td>
                                </tr>
                                </tbody>
                            </table>
                        </>
                    )}

                    {status === 2 && (
                        <>
                            <table>
                                <tbody>
                                <tr>
                                    <th scope="row" rowSpan={3}>ASME</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">150</th>
                                    <th scope="col">300</th>
                                    <th scope="col">600</th>
                                    <th scope="col">900</th>
                                    <th scope="col">1500</th>
                                    <th scope="col">2500</th>
                                </tr>
                                <tr>
                                    <th scope="row">BB</th>
                                    <td>2&#34; ~ 36&#34;</td>
                                    <td>2&#34; ~ 28&#34;</td>
                                    <td>2&#34;~ 24&#34;</td>
                                    <td>2½&#34; ~ 16&#34;</td>
                                    <td>2½&#34; ~ 14&#34;</td>
                                </tr>
                                <tr>
                                    <th scope="row">PB</th>
                                    <td className="bg">-</td>
                                    <td className="bg">-</td>
                                    <td className="bg">-</td>
                                    <td className="bg">2&#34; ~ 24&#34;</td>
                                    <td className="bg">2&#34; ~ 20&#34;</td>
                                    <td className="bg">2&#34; ~ 16&#34;</td>
                                </tr>
                                </tbody>
                            </table>

                            <table>
                                <tbody>
                                <tr>
                                    <th scope="row" rowSpan={2}>KS</th>
                                    <th scope="col">10K</th>
                                    <th scope="col">20K</th>
                                    <th scope="col">30K</th>
                                    <th scope="col">40K</th>
                                    <th scope="col">63K</th>
                                </tr>
                                <tr>
                                    <td>50- 900A</td>
                                    <td>50- 700A</td>
                                    <td>50- 700A</td>
                                    <td>50- 600A</td>
                                    <td>50- 600A</td>
                                </tr>
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
