import {useEffect, useRef, useState} from "react";
import {useCookies} from "react-cookie";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface Props {
  language: any;
}

export default function LanguageButton({language}: Props) {
  const router = useRouter();
  const query = useSearchParams();
  const currentRoute = usePathname();
  const [cookie, setCookie] = useCookies(['LANG']);
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

  const [languageSelected, setLanguageSelected] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageSelected(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button className={`language-button ${language.language === 'en' ? 'en' : ''}`} onClick={() => setLanguageSelected(true)}>{language.language === 'kr' ? "KOR" : "ENG"}</button>
      <ul ref={dropdownRef} className={`language-list ${language.language === 'en' ? 'en' : ''} ${languageSelected ? 'show' : ''}`}>
        {language.language === 'kr' ? (
          <>
            <li>
              <button onClick={(e) => {
                handleLang(e, lang === 'kr' ? 'kr' : 'kr');
                setLanguageSelected(false);
              }}>KOR</button>
            </li>
            <li>
              <button onClick={(e) => {
                handleLang(e, lang === 'kr' ? 'en' : 'en');
                setLanguageSelected(false);
              }}>ENG</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={(e) => {
                handleLang(e, lang === 'kr' ? 'en' : 'en');
                setLanguageSelected(false);
              }}>ENG</button>
            </li>
            <li>
              <button onClick={(e) => {
                handleLang(e, lang === 'kr' ? 'kr' : 'kr');
                setLanguageSelected(false);
              }}>KOR</button>
            </li>
          </>
        )}
      </ul>
    </>
  )
}
