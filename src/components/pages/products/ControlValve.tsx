'use client';

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

interface Props {
    language?: any;
}

export default function ControlValve({language}: Props) {
    const [status, setStatus] = useState<number>(0);

    return (
        <>
            <div>
                <div className="text-area">
                    <div className="text-area-btn text-area-btn2">
                        <button className="active">{language?.product_06_btn_01}</button>
                    </div>
                    <div className="text-area-detail">
                        <div className="image-area">
                            <p><Image src="/images/sub/products/control/control-valve-01.png" alt="" width={457} height={819}/></p>
                        </div>
                        <ul className="control-valve">
                            <li>
                                <dl>
                                    <dt>{language?.product_06_13}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_v100.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_14}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_v200.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_15}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_v300.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_16}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_a300.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_17}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_v400.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_18}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_d400.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_19}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_v510.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_20}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_v600.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_21}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_v800.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>{language?.product_06_22}</dt>
                                    <dd>
                                        <Link href="/file/control-valves_v100200.pdf" target="_blank">{language?.product_06_btn_03}</Link>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="image-area">
                    <p><Image src="/images/sub/products/control/control-valve-01.png" alt="" width={457} height={819}/></p>
                </div>
            </div>
            <div className="text-table">
                <div className="table-btn">
                    <button className={status === 0 ? "active" : ""} onClick={() => setStatus(0)}>{language?.product_06_23}</button>
                    <button className={status === 1 ? "active" : ""} onClick={() => setStatus(1)}>{language?.product_06_25}</button>
                    <button className={status === 2 ? "active" : ""} onClick={() => setStatus(2)}>{language?.product_06_27}</button>
                    <button className={status === 3 ? "active" : ""} onClick={() => setStatus(3)}>{language?.product_06_29}</button>
                </div>
                <div className="paragraph-area">
                    {status === 0 && <p>{language?.product_06_24}</p>}
                    {status === 1 && <p>{language?.product_06_26}</p>}
                    {status === 2 && <p>{language?.product_06_28}</p>}
                    {status === 3 && <p>{language?.product_06_30}</p>}
                </div>
                <Link href="/file/CONTROL(FINAL).pdf" target="_blank">{language?.product_06_btn_02}</Link>
            </div>

        </>
    )
}
