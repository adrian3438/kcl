import Image from "next/image";
import Link from "next/link";
import MainMenu from "@/components/common/MainMenu";
import MobileMenu from "@/components/common/MobileMenu";

interface Props {
    language: any
}

export default function Header({language}: Props) {
    return (
        <header>
            <div className="header-inner">
                <h1><Link href="/"><Image src="/images/common/logo.png" alt="Since 2001 KCL Valve" width={188} height={69}/></Link></h1>
                <MainMenu language={language} />
                <button>KR</button>
                <MobileMenu language={language}/>
            </div>
        </header>
    )
}
