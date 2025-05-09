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
  language: any;
  white?: true;
}

export default function Header({language, white}: Props) {
  const router = useRouter();
  const query = useSearchParams();
  const currentRoute = usePathname();
  const [cookie, setCookie] = useCookies(['LANG']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lang, setLang] = useState<any>('kr');

  function handleLang(e: any, lang: string) {
    e.preventDefault();
    setCookie('LANG', lang, {path: '/'});

    // 언어 변경 시 , url 변경
    const newParams = new URLSearchParams(query.toString());
    newParams.set('lang', lang);
    router.push(`${currentRoute}?${newParams?.toString()}`);
  }

  useEffect(() => {
    setLang(cookie.LANG)
  }, [setCookie, cookie]);

  //스크롤 발생 시 메뉴 배경 흰색으로 변경
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로딩 시도 필요
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled || white ? 'scrolled' : ''}>
      <div className="header-top-bar">
        <ul className="header-items">
          <li>
            <Image src="/images/main/retro-phone.png" alt="phone icon" width={24} height={24}/>
          </li>
          <li>+82 10 6269 8001</li>
          <li onClick={(e) => handleLang(e, 'en')}>
            <Image src="/images/main/united-states.png" alt="en" width={26} height={17} style={{cursor: "pointer"}}/>
          </li>
          <li onClick={(e) => handleLang(e, 'kr')}>
            <Image src="/images/main/south-korea.png" alt="kr" width={26} height={17} style={{cursor: "pointer"}}/>
          </li>
        </ul>
      </div>

      <div className={`header-inner ${language?.language}`} onMouseOver={() => setIsScrolled(true)}>
        <h1 className="logo">
          <Link href="/">
            {isScrolled || white ?
              <Image src="/images/common/logo.png" alt="Since 2001 KCL Valve" width={122.609} height={45} style={{width: "auto", height: "auto"}}/>
              :
              <Image src="/images/common/logo-white.png" alt="Since 2001 KCL Valve" width={125} height={45} style={{width: "auto", height: "auto"}}/>
            }
          </Link>
        </h1>
        <MainMenu language={language}/>
        <div>
          <LanguageButton language={language}/>
          <MobileMenu language={language}/>
        </div>
      </div>
    </header>
  )
}
