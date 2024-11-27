import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface Props {
    language: any;
}

export default function LanguageButton({language}: Props) {
    const router = useRouter();
    const query = useSearchParams();
    const currentRoute = usePathname();
    const [cookie , setCookie] = useCookies(['LANG']);
    const [lang , setLang] = useState<any>('kr');

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
        <button className="language-button" onClick={(e) => handleLang(e, lang === 'kr' ? 'en' : 'kr')}>{language.language === 'kr' ? "EN" : "KR"}</button>
    )
}
