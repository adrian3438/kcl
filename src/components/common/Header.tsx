'use client';

import Image from "next/image";
import Link from "next/link";
import MainMenu from "@/components/common/MainMenu";
import MobileMenu from "@/components/common/MobileMenu";
import LanguageButton from "@/components/common/LanguageButton";
import {useState, useEffect} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCookies} from "react-cookie";

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

    const router = useRouter();
    const query = useSearchParams();
    const currentRoute = usePathname();
    const [cookie , setCookie] = useCookies(['LANG']);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [lang, setLang] = useState<any>('kr');

    function handleLang (e : any, lang : string) {
        e.preventDefault();
        setCookie('LANG', lang, {path : '/'});

        // 언어 변경 시 , url 변경
        const newParams = new URLSearchParams(query.toString());
        newParams.set('lang', lang);
        router.push(`${currentRoute}?${newParams?.toString()}`);
    }

    useEffect(()=>{setLang(cookie.LANG)} , [setCookie, cookie]);


    return (
        <header onMouseLeave={() => handleMouseLeave()} onMouseOver={() => handleMouseOver()}>
            <div className="header-top-bar">
                <ul className="header-items">
                    <li>
                    <Image src="/images/main/retro-phone.png" alt="phone icon" width={25} height={25} />
                    </li>
                    <li>+82 10 6269 8001</li>
                    <li onClick={(e) => handleLang(e, 'en')}>
                    <Image src="/images/main/united-states.png" alt="en" width={30} height={30} style={{cursor: "pointer"}}/>
                    </li>
                    <li onClick={(e) => handleLang(e, 'kr')}>
                    <Image src="/images/main/south-korea.png" alt="kr" width={30} height={30} style={{cursor: "pointer"}}/>
                    </li>
                </ul>
            </div>

            <div className="header-inner">

                <h1 className="logo"><Link href="/"><Image src="/images/common/logo.png" alt="Since 2001 KCL Valve" width={188} height={69}/></Link></h1>
                <MainMenu language={language} headerLeave={headerLeave}/>
                <div>
                    <LanguageButton language={language}/>
                    <MobileMenu language={language}/>
                </div>
            </div>
        </header>
    )
}
