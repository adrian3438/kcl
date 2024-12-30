import Image from "next/image";
import Link from "next/link";

interface Props {
    language: any
}

export default function Footer({language}: Props) {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-area1">
                    <Image src="/images/common/footer-logo.png" alt="Since 2001 KCL Valve" width={250} height={90} />
                    <div>
                        <div>
                            <p>{language.footer_1}</p>
                            <p>{language.footer_2}</p>
                        </div>
                        <div>
                            <p>{language.footer_3}</p>
                            <p>{language.footer_4}</p>
                        </div>
                        <div>
                            <p>{language.footer_5}</p>
                        </div>
                        <div>
                            <p>{language.footer_6}</p>
                        </div>
                    </div>
                </div>
                <div className="footer-area2">
                    <p className="news-letter">{language.footer_7}</p>
                    <dl>
                        <dt>{language.footer_8}</dt>
                        <dd>
                            <input type="text" placeholder="Your email address"/>
                            <button>{language.footer_9}</button>
                        </dd>
                    </dl>
                    <div className="links">
                        <dl>
                            <dt>{language.footer_10}</dt>
                            <dd><Link href="/sitemap" className="sitemap">{language.footer_11}</Link></dd>
                        </dl>
                        <span>|</span>
                        <dl>
                            <dt>{language.footer_12}</dt>
                            <dd>
                                <Link href="">{language.footer_13}</Link>
                                <Link href="">{language.footer_14}</Link>
                                <Link href="">{language.footer_15}</Link>
                                <Link href="">{language.footer_16}</Link>
                            </dd>
                        </dl>
                    </div>
                    <p className="copyright">
                        {language.footer_17}
                    </p>
                </div>
            </div>
        </footer>
    )
}
