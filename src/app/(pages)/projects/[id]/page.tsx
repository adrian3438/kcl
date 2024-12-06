import "@/assets/projects/projects.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectsDetail({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className="container">
                <ul className="location">
                    <li>{language?.projects_01}</li>
                </ul>
                <div className="project-list-detail">
                    <ul>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                        <li><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></li>
                    </ul>
                    <div className="table-area">
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">DATE</th>
                                <th scope="col">USER</th>
                                <th scope="col">PROJECT NAME</th>
                                <th scope="col">EPC</th>
                                <th scope="col">ITEM</th>
                                <th scope="col">REMARK</th>
                                <th scope="col">MATERIAL</th>
                                <th scope="col">CLASS</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">EA</th>
                                <th scope="col">SITE</th>
                                <th scope="col">RESULT</th>
                                <th scope="col">TOTAL AMOUNT</th>
                                <th scope="col">YEAR of Supply</th>
                                <th scope="col">REMARK</th>
                                <th scope="col">BLAND</th>
                                <th scope="col">납품처</th>
                                <th scope="col">PO NO.</th>
                                <th scope="col">생산의뢰서 NO.</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2011.07</td>
                                <td>NIOC</td>
                                <td>SOUTH PAR 12 / GAS PROCESSING</td>
                                <td>GMMOS / GAS TECH</td>
                                <td>BALL, GATE, GLOBE, CHECK etc</td>
                                <td>&nbsp;</td>
                                <td>A105 / F321 / WCB / CF8C</td>
                                <td>150# ~ 800#</td>
                                <td>1/2&quot; ~ 12&quot;</td>
                                <td>2,170 ea</td>
                                <td>UAE/IRAN</td>
                                <td>DONE</td>
                                <td>$458,164.38</td>
                                <td>2011</td>
                                <td>OIL & GAS</td>
                                <td>KCL</td>
                                <td>GAS TECH</td>
                                <td>GTI/9113/KCL-01</td>
                                <td>B087</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-area">
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">DATE</th>
                                <th scope="col">USER</th>
                                <th scope="col">PROJECT NAME</th>
                                <th scope="col">EPC</th>
                                <th scope="col">ITEM</th>
                                <th scope="col">REMARK</th>
                                <th scope="col">MATERIAL</th>
                                <th scope="col">CLASS</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">EA</th>
                                <th scope="col">SITE</th>
                                <th scope="col">RESULT</th>
                                <th scope="col">TOTAL AMOUNT</th>
                                <th scope="col">YEAR of Supply</th>
                                <th scope="col">REMARK</th>
                                <th scope="col">BLAND</th>
                                <th scope="col">납품처</th>
                                <th scope="col">PO NO.</th>
                                <th scope="col">생산의뢰서 NO.</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2011.07</td>
                                <td>NIOC</td>
                                <td>SOUTH PAR 12 / GAS PROCESSING</td>
                                <td>GMMOS / GAS TECH</td>
                                <td>BALL, GATE, GLOBE, CHECK etc</td>
                                <td>&nbsp;</td>
                                <td>A105 / F321 / WCB / CF8C</td>
                                <td>150# ~ 800#</td>
                                <td>1/2&quot; ~ 12&quot;</td>
                                <td>2,170 ea</td>
                                <td>UAE/IRAN</td>
                                <td>DONE</td>
                                <td>$458,164.38</td>
                                <td>2011</td>
                                <td>OIL & GAS</td>
                                <td>KCL</td>
                                <td>GAS TECH</td>
                                <td>GTI/9113/KCL-01</td>
                                <td>B087</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="related-projects">
                        <h2>Related Projects</h2>
                        <ul>
                            <li><Link href="#"><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></Link></li>
                            <li><Link href="#"><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></Link></li>
                            <li><Link href="#"><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></Link></li>
                            <li><Link href="#"><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
