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
                    <Image src="/images/common/logo-mobile.png" alt="Since 2001 KCL Valve" width={80} height={29}/>
                    <button className="close" onClick={closeMobileMenu}/>
                </div>
                <ul>
                    <li>
                        <Link href="/projects">{language.header_0}</Link>
                    </li>
                    <li className={menuNumber === 1 ? 'on' : ''}>
                        <button onClick={() => handleMobileMenu(1)}>{language?.header_1}</button>
                        <ul>
                            <li><Link href="/about-us/management-solution">- {language?.header_1_1}</Link></li>
                            <li><Link href="/about-us/company-concept">- {language?.header_1_2}</Link></li>
                            <li><Link href="/about-us/greeting">- {language?.header_1_3}</Link></li>
                            <li><Link href="/about-us/history">- {language?.header_1_4}</Link></li>
                            <li><Link href="/about-us/partner">- {language?.header_1_5}</Link></li>
                            <li><Link href="/about-us/certificates">- {language?.header_1_6}</Link></li>
                        </ul>
                    </li>
                    <li className={menuNumber === 2 ? 'on' : ''}>
                        <button onClick={() => handleMobileMenu(2)}>{language.header_2}</button>
                        <ul>
                            <li><Link href="/product/forged-ball-valve">- {language?.header_2_1}</Link></li>
                            <li><Link href="/product/casted-ball-valve">- {language?.header_2_2}</Link></li>
                            <li><Link href="/product/plug-valve">- {language?.header_2_3}</Link></li>
                            <li><Link href="/product/casting-valve">- {language?.header_2_4}</Link></li>
                            <li><Link href="/product/butterfly-valve">- {language?.header_2_5}</Link></li>
                            <li><Link href="/product/control-valve">- {language?.header_2_6}</Link></li>
                            <li><Link href="/product/post-indicator-gate-valve">- {language?.header_2_7}</Link></li>
                            <li><Link href="/product/knife-gate-valve">- {language?.header_2_9}</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/projects">{language.header_3}</Link>
                    </li>
                    <li className={menuNumber === 3 ? 'on' : ''}>
                        <button onClick={() => handleMobileMenu(3)}>{language.header_4}</button>
                        <ul>
                            <li><Link href="/media/video">{language?.header_4_4}</Link></li>
                            <li><Link href="/media/catalog">{language?.header_4_2}</Link></li>
                            <li><Link href="/media/pq">{language?.header_4_5}</Link></li>
                            <li><Link href="/media/3d-modeling">{language?.header_4_3}</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact">{language.header_5}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
