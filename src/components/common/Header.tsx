'use client';

import Image from "next/image";
import Link from "next/link";
import MainMenu from "@/components/common/MainMenu";
import MobileMenu from "@/components/common/MobileMenu";
import LanguageButton from "@/components/common/LanguageButton";
import {useState} from "react";

interface Props {
    language: any
}

export default function Header({language}: Props) {
    const [headerLeave, setHeaderLeave] = useState<boolean>(false);
    function handleMouseLeave() {
        setHeaderLeave(true);
    }
    function handleMouseOver() {
        setHeaderLeave(false);
    }
    return (
        <header onMouseLeave={() => handleMouseLeave()} onMouseOver={() => handleMouseOver()}>
            <div className="header-inner">
                <h1><Link href="/"><Image src="/images/common/logo.png" alt="Since 2001 KCL Valve" width={188} height={69}/></Link></h1>
                <MainMenu language={language} headerLeave={headerLeave}/>
                <div>
                    <LanguageButton language={language}/>
                    <MobileMenu language={language}/>
                </div>
            </div>
        </header>
    )
}
