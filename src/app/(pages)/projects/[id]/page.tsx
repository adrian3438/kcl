import "@/assets/projects/projects.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {fetchLanguage} from "@/util/fetchLanguage";
import Image from "next/image";
import api from "@/lib/api";
import ProjectDetailImageList from "@/components/sub/ProjectDetailImageList";

export default async function ProjectsDetail({searchParams : {lang}, params: {id}} : any) {
    const language = await fetchLanguage(lang);
    const response = await api.get(`/admin/projects/getProjectDetail.php?ID=${id}`);
    const projectImages = response?.data?.List[0].projectImages;
    const projectTables = response?.data?.List[0].projectPerformance;

    return (
        <>
            <Header language={language}/>
            <div className="container">
                <ul className="location">
                    <li>{language?.projects_01}</li>
                </ul>
                <div className="project-list-detail">
                    <ul>
                      <ProjectDetailImageList projectImages={projectImages}/>
                        {/*{projectImages && projectImages.length > 0 && projectImages.map((item: any, index: number) =>
                          <li key={index}><Image src={item?.imageFile} alt="" width={500} height={375}/></li>
                        )}*/}
                    </ul>
                    {projectTables && projectTables.length > 0 && projectTables.map((item: any, index: number) =>
                      <div className="table-area" key={index}>
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
                                  <th scope="col">BRAND</th>
                                  <th scope="col">DELIVERY TO</th>
                                  <th scope="col">PO NO.</th>
                                  <th scope="col">PRODUCTION NO.</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td>{item?.projectDate}</td>
                                  <td>{item?.projectUser}</td>
                                  <td>{item?.projectName}</td>
                                  <td>{item?.projectEpc}</td>
                                  <td>{item?.projectItem}</td>
                                  <td>{item?.projectRemark}</td>
                                  <td>{item?.projectMaterial}</td>
                                  <td>{item?.projectClass}</td>
                                  <td>{item?.projectSize}</td>
                                  <td>{item?.projectEa}</td>
                                  <td>{item?.projectSite}</td>
                                  <td>{item?.projectResult}</td>
                                  <td>{item?.projectAmount}</td>
                                  <td>{item?.projectBrand}</td>
                                  <td>{item?.projectBuyer}</td>
                                  <td>{item?.projectPo}</td>
                                  <td>{item?.projectManufactureNo}</td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                    )}
                    {/*<div className="related-projects">
                        <h2>Related Projects</h2>
                        <ul>
                            <li><Link href="#"><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></Link></li>
                            <li><Link href="#"><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></Link></li>
                            <li><Link href="#"><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></Link></li>
                            <li><Link href="#"><Image src="/images/sub/projects/project-detail-sample.png" alt="" width={500} height={375}/></Link></li>
                        </ul>
                    </div>*/}
                </div>
            </div>
            <Footer language={language}/>
        </>
    );
}
