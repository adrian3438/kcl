import Link from "next/link";

interface Props {
    language: any
}

export default function MainMenu({language}: Props) {
    return (
        <nav style={{display: "none"}}>
            <ul>
                <li><Link href="#">{language?.header_1}</Link></li>
                <li><Link href="#">{language?.header_2}</Link></li>
                <li><Link href="#">{language?.header_3}</Link></li>
                <li><Link href="#">{language?.header_4}</Link></li>
                <li><Link href="#">{language?.header_5}</Link></li>
            </ul>
            <ul>
                <li>
                    <ul>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                    </ul>
                </li>
                <li>&nbsp;</li>
                <li>
                    <ul>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                    </ul>
                </li>
                <li>&nbsp;</li>
            </ul>
        </nav>
    )
}
