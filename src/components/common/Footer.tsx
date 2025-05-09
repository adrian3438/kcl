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
          <ul>
            <li><Image src="/images/common/logo-gray.png" alt="Since 2001 KCL Valve" width={117} height={42}/></li>
          </ul>
          <div>
            <div className="valve">
              <p><Image src="/images/common/valve.svg" alt="" width={24} height={24}/>{language.footer_1}</p>
              <div>
                <p>{language.footer_2}</p>
                <ul>
                  <li><span>{language?.footer_3_1}</span>+82 31-405-7327</li>
                  <li><span>{language?.footer_3_2}</span>+82 31-405-7328</li>
                  <li><span>{language?.footer_3_3}</span>jbko@kclvalve.com</li>
                </ul>
              </div>
            </div>
            <div className="factory">
              <p><Image src="/images/common/factory.svg" alt="" width={24} height={24}/>{language.footer_5}</p>
              <div>
                <p>{language.footer_5_1}</p>
                <ul>
                  <li><span>{language?.footer_6}</span>+82 10-6269-8001</li>
                </ul>
              </div>
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
            <p><Link href="/sitemap" className="sitemap">{language.footer_11}</Link></p>
            <span></span>
            <ul>
              <li><Link href="#"><Image src="/images/common/icon-linkedin.svg" alt="LinkedIn" width={32} height={32}/></Link></li>
              <li><Link href="#"><Image src="/images/common/icon-x.svg" alt="X" width={32} height={32}/></Link></li>
              <li><Link href="#"><Image src="/images/common/icon-facebook.svg" alt="Facebook" width={32} height={32}/></Link></li>
              <li><Link href="#"><Image src="/images/common/icon-youtube.svg" alt="Youtube" width={32} height={32}/></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          {language.footer_17}
        </p>
      </div>
    </footer>
  )
}
