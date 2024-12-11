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
            <section className="section-02">
                <div>
                    <div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="main-video-01"
                        >
                            <source src="/video/kclvalve-main-video-1.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <Link href="#">
                            <p>OOO Test</p>
                            <p>Go to OOO valve</p>
                        </Link>
                    </div>
                    <div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="main-video-02"
                        >
                            <source src="/video/kclvalve-main-video-2.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <Link href="#">
                            <p>OOO Test</p>
                            <p>Go to OOO valve</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="main-video-03"
                        >
                            <source src="/video/kclvalve-main-video-3.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <Link href="#">
                            <p>OOO Test</p>
                            <p>Go to OOO valve</p>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section-03 main-section">
                <Image src="/images/main/section-03-bg.png" alt="" width={1919} height={1036}/>
                <div className="section-text">
                    <div>
                        <div>
                            <p className="section-title">{language?.main_01_22}</p>
                            <p className="section-text-01">{language?.main_01_23}</p>
                            <p className="section-text-02">{language?.main_01_24}</p>
                            <div>
                                <Link href="/about-us/management-solution" className="btn-01">{language?.main_01_25}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-04 main-section">
                <Image src="/images/main/section-04-bg.png" alt="" width={1920} height={1076}/>
                <div className="section-text">
                    <div>
                        <div>
                            <p className="section-title">{language?.main_01_26}</p>
                            <p className="section-text-01">{language?.main_01_27}</p>
                            <div>
                                <Link href="/projects" className="btn-01">{language?.main_01_28}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-05 main-section">
                <Image src="/images/main/section-05-bg.png" alt="" width={1920} height={1088}/>
                <div className="section-text">
                    <div>
                        <div>
                            <p className="section-title">{language?.main_01_29}</p>
                            <p className="section-text-01">{language?.main_01_30}</p>
                            <div>
                                <Link href="/media/blog" className="btn-01">{language?.main_01_31}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-06">
                <Image src="/images/main/section-06-bg.png" alt="" width={1920} height={998}/>
                <div>
                    <div>
                        <div>
                            <p>30+</p>
                            <p>{language?.main_01_32}</p>
                        </div>
                        <div>
                            <p>500+</p>
                            <p>{language?.main_01_33}</p>
                        </div>
                        <div>
                            <p>60</p>
                            <p>{language?.main_01_34}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-07 main-section">
                <Image src="/images/main/section-07-bg.png" alt="" width={1922} height={1087}/>
                <div className="section-text">
                    <div>
                        <div>
                            <p className="section-title">{language?.main_01_35}</p>
                            <p className="section-text-01">{language?.main_01_36}</p>
                            <div>
                                <Link href="/media/3d-modeling" className="btn-01">{language?.main_01_37}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
