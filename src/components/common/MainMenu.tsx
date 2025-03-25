'use client';

import Link from "next/link";
import {useState} from "react";

interface Props {
    language: any;
}

export default function MainMenu({language}: Props) {
    const [menuIndex, setMenuIndex] = useState<number>(0);

    return (
        <nav className="main-menu">
            <ul className="depth1" onMouseLeave={() => setMenuIndex(0)}>
                <li onMouseOver={() => setMenuIndex(0)}><Link href="/">{language?.header_0}</Link></li>
                <li className={menuIndex === 1 ? 'on' : ''} onMouseOver={() => setMenuIndex(1)}><Link href="/about-us/management-solution">{language?.header_1}</Link>
                    <ul>
                        <li><Link href="/about-us/management-solution">{language?.header_1_1}</Link></li>
                        <li><Link href="/about-us/company-concept">{language?.header_1_2}</Link></li>
                        <li><Link href="/about-us/greeting">{language?.header_1_3}</Link></li>
                        <li><Link href="/about-us/history">{language?.header_1_4}</Link></li>
                        <li><Link href="/about-us/partner">{language?.header_1_5}</Link></li>
                        <li><Link href="/about-us/certificates">{language?.header_1_6}</Link></li>
                    </ul>
                </li>
                <li className={menuIndex === 2 ? 'on' : ''} onMouseOver={() => setMenuIndex(2)}><Link href="/product/forged-ball-valve">{language?.header_2}</Link>
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
                <li onMouseOver={() => setMenuIndex(0)}><Link href="/projects">{language?.header_3}</Link></li>
                <li className={menuIndex === 4 ? 'on' : ''} onMouseOver={() => setMenuIndex(4)}><Link href="/media/video">{language?.header_4}</Link>
                    <ul>
                        <li><Link href="/media/video">{language?.header_4_4}</Link></li>
                        <li><Link href="/media/catalog">{language?.header_4_2}</Link></li>
                        <li><Link href="/media/pq">{language?.header_4_5}</Link></li>
                        <li><Link href="/media/3d-modeling">{language?.header_4_3}</Link></li>
                    </ul>
                </li>
                <li onMouseOver={() => setMenuIndex(0)}><Link href="/contact">{language?.header_5}</Link></li>
            </ul>
        </nav>
    )
}
