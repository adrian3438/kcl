import "@/assets/projects/projects.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";
import Link from "next/link";

export default async function Projects({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="container">
                <ul className="location">
                    <li>{language?.projects_01}</li>
                </ul>
                <div className="project-category">
                    <button className="active">All</button>
                    <button>G-WAY-BALL</button>
                    <button>BALL</button>
                    <button>BUTTERFLY</button>
                    <button>CHECK</button>
                    <button>DBB</button>
                    <button>GATE</button>
                    <button>GLOBE</button>
                    <button>PLUG</button>
                    <button>STRAINER</button>
                </div>
                <div className="project-list">
                    <ul>
                        <li>
                            <Link href="#">
                                <div className="image-area">
                                    <Image src="/images/sub/projects/project-sample.png" alt="sample" width={306} height={229}/>
                                </div>
                                <div className="detail">
                                    <p className="project-title">Title</p>
                                    <div className="project-detail">
                                        test<br/>
                                        test<br/>
                                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                                    </div>
                                </div>
                                <div className="project-type">
                                    <div>
                                        <Image src="/images/sub/projects/ball_valve_icon.png" alt="" width={48} height={48}/>
                                        <p>Ball valve</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="image-area">
                                    <Image src="/images/sub/projects/project-sample.png" alt="sample" width={306} height={229}/>
                                </div>
                                <div className="detail">
                                    <p className="project-title">Title</p>
                                    <div className="project-detail">
                                        test
                                    </div>
                                </div>
                                <div className="project-type">
                                    <div>
                                        <Image src="/images/sub/projects/butterfly_valve_icon.png" alt="" width={48} height={48}/>
                                        <p>Ball valve</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
