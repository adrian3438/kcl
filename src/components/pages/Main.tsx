import '@/assets/main.scss';
import Section01 from "@/components/main/Section01";
import Image from "next/image";
import Link from "next/link";

interface Props {
  language: any
}

export default function Main({language}: Props) {
  return (
    <main>
      <Section01 language={language}/>
      <section className="section-03">
        <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
          <iframe src="https://player.vimeo.com/video/1045185563?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&background=1&muted=1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position: 'absolute', top: 0, left: 0, width: "100%", height: '100%'}} title="kclvalve_homepage_main_concept_rev2"></iframe>
        </div>

      </section>
      <section className="section-04">
        <Image src="/images/main/section-04-bg.png" alt="" width={1920} height={1076}/>
        <div className="section-text">
          <p className="section-title">{language?.main_01_26}</p>
          <p className="section-text-01">{language?.main_01_27}</p>
          <Link href="/projects" className="btn-01">{language?.main_01_28} <Image src="/images/main/icon-plus.svg" alt="" width={24} height={24}/></Link>
        </div>
      </section>
      <section className="section-06">
        <Image src="/images/main/section-06-bg.jpg" alt="" width={1920} height={998}/>
        <div>
          <div>
            <div>
              <p><span>30+</span>{language?.main_01_32}</p>
            </div>
            <div>
              <p><span>500+</span>{language?.main_01_33}</p>
            </div>
            <div>
              <p><span>60</span>{language?.main_01_34}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-07">
        <ul>
          <li className="text-section">
            <p className="section-title">{language?.main_01_35}</p>
            <p className="section-text-01">{language?.main_01_36}</p>
            <div>
              <Link href="/media/3d-modeling" className="btn-01">{language?.main_01_37}</Link>
              <Image src="/images/main/right-arrow.svg" alt="" width={24} height={24}/>
            </div>
          </li>
          <li>
            <Image src="/images/main/3d_modeling_rev1.jpg" alt="" width={491} height={422}/>
          </li>
          <li>
            <Image src="/images/main/3d_modeling_rev2.jpg" alt="" width={491} height={422}/>
          </li>
          <li>
            <Image src="/images/main/3d_modeling_rev3.jpg" alt="" width={491} height={422}/>
          </li>
          <li>
            <Image src="/images/main/3d_modeling_rev4.jpg" alt="" width={491} height={422}/>
          </li>
          <li>
            <Image src="/images/main/3d_modeling_rev5.jpg" alt="" width={491} height={422}/>
          </li>
          <li>
            <Image src="/images/main/3d_modeling_rev6.jpg" alt="" width={491} height={422}/>
          </li>
          <li>
            <Image src="/images/main/3d_modeling_rev7.jpg" alt="" width={491} height={422}/>
          </li>
          <li>
            <Image src="/images/main/3d_modeling_rev8.jpg" alt="" width={491} height={422}/>
          </li>
        </ul>
      </section>
    </main>
  )
}
