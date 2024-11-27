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
                <li onMouseOver={() => handleMouseover()}><Link href="#">{language?.header_1}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="#">{language?.header_2}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="#">{language?.header_3}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="#">{language?.header_4}</Link></li>
                <li onMouseOver={() => handleMouseover()}><Link href="#">{language?.header_5}</Link></li>
            </ul>
            <ul className={`depth2 ${depth2Visible ? 'on' : ''}`}>
                <li>
                    <ul>
                        <li><Link href="#">{language?.header_1_1}</Link></li>
                        <li><Link href="#">{language?.header_1_2}</Link></li>
                        <li><Link href="#">{language?.header_1_3}</Link></li>
                        <li><Link href="#">{language?.header_1_4}</Link></li>
                        <li><Link href="#">{language?.header_1_5}</Link></li>
                        <li><Link href="#">{language?.header_1_6}</Link></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><Link href="#">{language?.header_2_1}</Link></li>
                        <li><Link href="#">{language?.header_2_2}</Link></li>
                        <li><Link href="#">{language?.header_2_3}</Link></li>
                        <li><Link href="#">{language?.header_2_4}</Link></li>
                        <li><Link href="#">{language?.header_2_5}</Link></li>
                        <li><Link href="#">{language?.header_2_6}</Link></li>
                        <li><Link href="#">{language?.header_2_7}</Link></li>
                        <li><Link href="#">{language?.header_2_8}</Link></li>
                        <li><Link href="#">{language?.header_2_9}</Link></li>
                    </ul>
                </li>
                <li>&nbsp;</li>
                <li>
                    <ul>
                        <li><Link href="#">{language?.header_4_1}</Link></li>
                        <li><Link href="#">{language?.header_4_2}</Link></li>
                        <li><Link href="#">{language?.header_4_3}</Link></li>
                    </ul>
                </li>
                <li>&nbsp;</li>
            </ul>
        </nav>
    )
}
