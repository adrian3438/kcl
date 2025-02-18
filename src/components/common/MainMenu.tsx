'use client';

import Link from "next/link";
import {useEffect, useState} from "react";

interface Props {
    language: any;
    headerLeave: boolean;
}

export default function MainMenu({language, headerLeave}: Props) {
    const [depth2Visible, setDepth2Visible] = useState<boolean>(false);
    function handleMouseover() {
        setDepth2Visible(true);
    }
    useEffect(() => {
        if(headerLeave) {
            setDepth2Visible(false);
        }
    }, [headerLeave]);

    return (
        <nav className="main-menu">
            <ul className="depth1">
                <li onMouseOver={() => handleMouseover()}><Link href="/">{language?.header_0}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="/about-us/management-solution">{language?.header_1}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="/product/forged-ball-valve">{language?.header_2}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="/projects">{language?.header_3}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="/media/blog">{language?.header_4}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="/contact">{language?.header_5}</Link></li>

            </ul>
            <div className={`depth2 ${depth2Visible ? 'on' : ''}`}>
                <ul>
                    <li>
                        {/* <ul>
                            <li><Link href="/">{language?.header_0}</Link></li>
                        </ul> */}
                    </li>
                    <li>
                        <ul>
                            <li><Link href="/about-us/management-solution">{language?.header_1_1}</Link></li>
                            <li><Link href="/about-us/company-concept">{language?.header_1_2}</Link></li>
                            <li><Link href="/about-us/greeting">{language?.header_1_3}</Link></li>
                            <li><Link href="/about-us/history">{language?.header_1_4}</Link></li>
                            <li><Link href="/about-us/partner">{language?.header_1_5}</Link></li>
                            <li><Link href="/about-us/certificates">{language?.header_1_6}</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><Link href="/product/forged-ball-valve">{language?.header_2_1}</Link></li>
                            <li><Link href="/product/casted-ball-valve">{language?.header_2_2}</Link></li>
                            <li><Link href="/product/plug-valve">{language?.header_2_3}</Link></li>
                            <li><Link href="/product/casting-valve">{language?.header_2_4}</Link></li>
                            <li><Link href="/product/butterfly-valve">{language?.header_2_5}</Link></li>
                            <li><Link href="/product/control-valve">{language?.header_2_6}</Link></li>
                            <li><Link href="/product/post-indicator-gate-valve">{language?.header_2_7}</Link></li>
                            <li><Link href="/product/knife-gate-valve">{language?.header_2_9}</Link></li>
                        </ul>
                    </li>
                    <li>&nbsp;</li>
                    <li>
                        <ul>
                            <li><Link href="/media/video">{language?.header_4_4}</Link></li>
                            <li><Link href="/media/catalog">{language?.header_4_2}</Link></li>
                            <li><Link href="/media/pq">{language?.header_4_5}</Link></li>
                            <li><Link href="/media/3d-modeling">{language?.header_4_3}</Link></li>
                            {/* <li><Link href="/media/blog">{language?.header_4_1}</Link></li> */}
                        </ul>
                    </li>
                    <li>&nbsp;</li>
                </ul>
            </div>
        </nav>
    )
}
