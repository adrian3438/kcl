import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

interface Props {
    language: any
}

export default function MobileMenu({language}: Props) {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
    const openMobileMenu = () => {
        setVisibleMenu(true);
    }
    const closeMobileMenu = () => {
        setVisibleMenu(false);
    }

    const [menuNumber, setMenuNumber] = useState<number>(0);
    const handleMobileMenu = (index: number) => {
        setMenuNumber(index);
        if(menuNumber === index) {
            setMenuNumber(0);
        }
    }

    return (
        <div className="mobile-menu">
            <button className="menu-button" onClick={openMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            <nav className={visibleMenu ? "on" : ''}>
                <div className="nav-header">
                    <Image src="/images/common/logo.png" alt="Since 2001 KCL Valve" width={188} height={69}/>
                    <button className="close" onClick={closeMobileMenu}/>
                </div>
                <ul>
                    <li className={menuNumber === 1 ? 'on' : ''}>
                        <button onClick={() => handleMobileMenu(1)}>{language?.header_1}</button>
                        <ul>
                            <li><Link href="#">- {language?.header_1_1}</Link></li>
                            <li><Link href="#">- {language?.header_1_2}</Link></li>
                            <li><Link href="#">- {language?.header_1_3}</Link></li>
                            <li><Link href="#">- {language?.header_1_4}</Link></li>
                            <li><Link href="#">- {language?.header_1_5}</Link></li>
                            <li><Link href="#">- {language?.header_1_6}</Link></li>
                        </ul>
                    </li>
                    <li className={menuNumber === 2 ? 'on' : ''}>
                        <button onClick={() => handleMobileMenu(2)}>{language.header_2}</button>
                        <ul>
                            <li><Link href="#">- {language?.header_2_1}</Link></li>
                            <li><Link href="#">- {language?.header_2_2}</Link></li>
                            <li><Link href="#">- {language?.header_2_3}</Link></li>
                            <li><Link href="#">- {language?.header_2_4}</Link></li>
                            <li><Link href="#">- {language?.header_2_5}</Link></li>
                            <li><Link href="#">- {language?.header_2_6}</Link></li>
                            <li><Link href="#">- {language?.header_2_7}</Link></li>
                            <li><Link href="#">- {language?.header_2_8}</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#">{language.header_3}</Link>
                    </li>
                    <li className={menuNumber === 3 ? 'on' : ''}>
                        <button onClick={() => handleMobileMenu(3)}>{language.header_4}</button>
                        <ul>
                            <li><Link href="#">- {language.header_4_1}</Link></li>
                            <li><Link href="#">- {language.header_4_2}</Link></li>
                            <li><Link href="#">- {language.header_4_3}</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#">{language.header_5}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
