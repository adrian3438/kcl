'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import ImageUploadBox from "@/components/DotsAdmin/Element/ImageUploadBox";
import TextBox from "@/components/DotsAdmin/Element/TextBox";
import TextAreaBox from "@/components/DotsAdmin/Element/TextAreaBox";
import AdminDateBox2 from "@/components/DotsAdmin/Element/DateBox2"
import api from "@/lib/api";
import Image from "next/image";

export default function Projects({searchParams : {id}} : any) {
  const router = useRouter();

  const [data, setData] = useState({
    projectGroupId: '',
    thumnailImage : null,
    subject: '',
    excerpt: '',
    projectImage: [],
    inputDate: '',
  });
  const [previewImage, setPreviewImage] = useState<any>({thumnailImage : null});

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const [projectImages, setProjectImages] = useState<any>([]);

  const [projectPerformance, setProjectPerformance] = useState<any>({
    projectId: id,
    projectDate: '',
    projectUser: '',
    projectName: '',
    projectEpc: '',
    projectItem: '',
    projectRemark: '',
    projectMaterial: '',
    projectClass: '',
    projectSize: '',
    projectEa: '',
    projectSite: '',
    projectResult: '',
    projectAmount: '',
    projectYear: '',
    projectBrand: '',
    projectBuyer: '',
    projectPo: '',
    projectManufactureNo: '',
  });

  const [registedPerformance, setRegistedPerformance] = useState<any[]>([]);

  function handleChange (e: any, index?: number) {
    const {name, value} = e.target;
    setProjectPerformance((prev:any) => ({...prev, [name] : value}));

    if(index !== undefined) {
      setRegistedPerformance((prev) =>
        prev.map((item, idx) =>
          idx === index ? { ...item, [name]: value } : item
        )
      );
    }
  }

  function handleSelect (e:React.ChangeEvent<HTMLSelectElement>) {
    const {name , value} = e.target;
    setData((prev:any) => ({...prev, [name] : value}))
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;

    const newFiles = Array.from(files); // FileList → 배열 변환

    setData((prev: any) => ({
      ...prev,
      [name]: [...(Array.isArray(prev[name]) ? prev[name] : []), ...newFiles], // 기존 배열 유지 + 새 파일 추가
    }));
  }

  async function handleRemoveFile(index: any) {
    const formData = new FormData();
    formData.append('ID', index);
    try {
      const response = await api.post(`/admin/projects/delProjectImage.php`, formData);
      if(response?.data?.result) {
        getProjectDetail();
      }
    } catch {
      alert('Server Error');
    }
  }

  //카테고리 리스트 조회
  const [categoryList, setCategoryList] = useState([]);
  async function getCategoryList() {
    try {
      const response = await api.post('/admin/code/getProjectGroupList2.php');
      if (response?.data?.result) {
        setCategoryList(response?.data?.List);
      } else {
        alert('API Load Failure');
      }
    } catch {
      alert('Server Error');
    }
  }
  useEffect(() => {
    getCategoryList();
  }, []);


  //프로젝트 등록/수정
  async function save() {
    const formData = new FormData();
    formData.append('projectGroupId', data?.projectGroupId);
    if(data?.thumnailImage){
      formData.append('thumbnailImage', data?.thumnailImage);
    }
    formData.append('projectName', data?.subject);
    formData.append('projectDescription', data?.excerpt);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // formData.append('projectImage', data?.projectImage);
    formData.append('inputDate', data?.inputDate);

    if(!id) { //신규등록
      try {
        const response = await api.post('/admin/projects/setProject.php', formData);
        if (response?.data?.result) {
          alert(response?.data?.resultMsg);
          router.back();
        } else {
          alert('API Load Failure');
        }
      } catch {
        alert('Server Error');
      }
    } else { //수정
      try {
        formData.append('ID', id);
        const response = await api.post('/admin/projects/updProject.php', formData);
        if(response?.data?.result) {
          alert(response?.data?.resultMsg);
          router.back();
        } else {
          alert('API Load Failure');
        }
      } catch {
        alert('Server Error');
      }
    }
  }

  //상세조회
  async function getProjectDetail() {
    try {
      const response = await api.get(`/admin/projects/getProjectDetail.php?ID=${id}`);
      if(response?.data?.result == true) {
        const data = response?.data?.List[0];

        setData((prev:any) => ({...prev,
          projectGroupId: data?.groupId,
          thumnailImage : null,
          subject: data?.projectName,
          excerpt: data?.projectDescription,
          // projectImages: data?.projectImages,
          inputDate: data?.createDate,
        }))
        setPreviewImage((prev:any) => ({...prev, thumnailImage : data?.thumbnailFile}));

        setProjectImages(data?.projectImages);

        setRegistedPerformance(data?.projectPerformance);
      }else {
        alert(response?.data?.resultMsg)
      }
    } catch {
      alert('Server Error');
    }
  }

  //프로젝트 이미지 등록
  async function registProjectImages(id: any) {
    console.log('registProjectImages');
    for (let i = 0; i < data?.projectImage.length; i++) {
      const formData = new FormData();
      formData.append('projectId', id);
      formData.append('projectImage', data?.projectImage[i]);
      try {
        await api.post('/admin/projects/setProjectImages.php', formData);
      } catch {
        alert('Server Error');
      }
    }
    getProjectDetail();
  }
  useEffect(() => {
    if(id) {
      registProjectImages(id);
    }
  }, [data?.projectImage]);

  useEffect(() => {
    if(id) {
      getProjectDetail();
    }
  }, [id]);


  //실적 신규 등록
  async function registTable() {
    const formData = new FormData();
    formData.append('projectId', projectPerformance.projectId);
    formData.append('projectDate', projectPerformance.projectDate);
    formData.append('projectUser', projectPerformance.projectUser);
    formData.append('projectName', projectPerformance.projectName);
    formData.append('projectEpc', projectPerformance.projectEpc);
    formData.append('projectItem', projectPerformance.projectItem);
    formData.append('projectRemark', projectPerformance.projectRemark);
    formData.append('projectMaterial', projectPerformance.projectMaterial);
    formData.append('projectClass', projectPerformance.projectClass);
    formData.append('projectSize', projectPerformance.projectSize);
    formData.append('projectEa', projectPerformance.projectEa);
    formData.append('projectSite', projectPerformance.projectSite);
    formData.append('projectResult', projectPerformance.projectResult);
    formData.append('projectAmount', projectPerformance.projectResult);
    formData.append('projectYear', projectPerformance.projectResult);
    formData.append('projectBrand', projectPerformance.projectResult);
    formData.append('projectBuyer', projectPerformance.projectResult);
    formData.append('projectPo', projectPerformance.projectResult);
    formData.append('projectManufactureNo', projectPerformance.projectResult);

    try {
      const response = await api.post(`/admin/projects/setProjectPerformance.php`, formData);
      if(response?.data?.result) {
        alert(response?.data?.resultMsg);
        location.reload();
      }
    } catch {
      alert('Server Error');
    }
  }

  // 실적 수정
  async function modifyTable(tableIndex: any) {
    const formData = new FormData();
    formData.append('ID', registedPerformance[tableIndex].ID);
    formData.append('projectDate', registedPerformance[tableIndex].projectDate);
    formData.append('projectUser', registedPerformance[tableIndex].projectUser);
    formData.append('projectName', registedPerformance[tableIndex].projectName);
    formData.append('projectEpc', registedPerformance[tableIndex].projectEpc);
    formData.append('projectItem', registedPerformance[tableIndex].projectItem);
    formData.append('projectRemark', registedPerformance[tableIndex].projectRemark);
    formData.append('projectMaterial', registedPerformance[tableIndex].projectMaterial);
    formData.append('projectClass', registedPerformance[tableIndex].projectClass);
    formData.append('projectSize', registedPerformance[tableIndex].projectSize);
    formData.append('projectEa', registedPerformance[tableIndex].projectEa);
    formData.append('projectSite', registedPerformance[tableIndex].projectSite);
    formData.append('projectResult', registedPerformance[tableIndex].projectResult);
    formData.append('projectAmount', registedPerformance[tableIndex].projectResult);
    formData.append('projectYear', registedPerformance[tableIndex].projectResult);
    formData.append('projectBrand', registedPerformance[tableIndex].projectResult);
    formData.append('projectBuyer', registedPerformance[tableIndex].projectResult);
    formData.append('projectPo', registedPerformance[tableIndex].projectResult);
    formData.append('projectManufactureNo', registedPerformance[tableIndex].projectResult);

    try {
      const response = await api.post(`/admin/projects/updProjectPerformance.php`, formData);
      if(response?.data?.result) {
        alert(response?.data?.resultMsg);
      }
    } catch {
      alert('Server Error');
    }
  }

  //실적 삭제
  async function deleteTable(performanceId: any) {
    const formData = new FormData();
    formData.append('ID', performanceId);
    try {
      const response = await api.post(`/admin/projects/delProjectPerformance.php`, formData);
      console.log('response : ', response);
      if(response?.data?.result) {
        alert(response?.data?.resultMsg);
        location.reload();
      }
    } catch {
      alert('Server Error')
    }
  }

  return(
    <div className="contentBox add">
      <h3>Projects</h3>
      <div className="flexBox">
        <div>
          <h4>{id ? '프로젝트 수정' : '프로젝트 등록'}</h4>
        </div>
        <div className="btnBox">
          <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
          <button className="blueBtn" onClick={() => save()}>{id ? '수정하기' : '저장하기'}</button>
        </div>
      </div>

      <div className="input_tableWrap">
        <table>
          <tbody>
          <tr>
            <th>프로젝트 카테고리 <span className="star">*</span></th>
            <td>
              <div className="selectContainer">
                <div className="selectWrap">
                  <div className="selectBox">
                    <select value={data?.projectGroupId} name="projectGroupId" onChange={(e)=>handleSelect(e)}>
                      {categoryList?.map((contents : any, index : number) => (
                        <option key={index} value={contents?.codeId}>{contents?.codeNameKr}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <ImageUploadBox
            title={'썸네일 이미지'}
            name={'thumnailImage'}
            imgUrl={previewImage?.thumnailImage}
            setData={setData}
            setPreview={setPreviewImage}
          />
          <TextBox
            title={'제목'}
            name={'subject'}
            value={data?.subject}
            setData={setData}
          />
          <TextAreaBox
            title={'설 명'}
            name={'excerpt'}
            value={data?.excerpt}
            description={'설명 글은 프로젝트의 요약 내용입니다.'}
            setData={setData}
          />
          {id && (
            <tr>
              <th>프로젝트 이미지 <span className="star">*</span></th>
              <td>
                <div className="imgUploadBox imgUploadBox_before">
                  <input type="file" id={`image-1`} name='projectImage' onChange={(e) => handleImageChange(e)} multiple/>
                  <input type="file" id={`image-1`} name='projectImage' multiple/>
                  <label htmlFor={`image-1`} className="imgUploadBtn imgUploadBtn_before">
                    <i className="fa-light fa-upload"></i>
                    파일 선택
                  </label>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                  {projectImages && projectImages.length > 0 && projectImages.map((item: any, index: number) => (
                    <p key={index}>
                      <Image src={item?.imageFile} alt="" width={240} height={160}/>
                      {item?.imageFilename} <button type="button" onClick={() => handleRemoveFile(item?.ID)}>X</button>
                    </p>
                  ))}
                  </div>
                </div>
              </td>
            </tr>
          )}
          {id && (
            <tr>
              <th>실적</th>
              <td>
                <div className="tableWrap" style={{marginBottom: '20px'}}>
                  <div className="btnBox" style={{marginBottom: '10px'}}>
                    <button className="blackBtn" onClick={() => registTable()}>등록</button>
                  </div>
                  <div className="tableType_a thumb" style={{overflowX: 'auto', maxWidth: '1300px'}}>
                    <table style={{minWidth: '2500px'}}>
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
                        <th scope="col">YEAR OF SUPPLY</th>
                        <th scope="col">BLAND</th>
                        <th scope="col">납품처</th>
                        <th scope="col">PO NO.</th>
                        <th scope="col">생산의뢰서 NO</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectDate" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectUser" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectName" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectEpc" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectItem" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectRemark" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectMaterial" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectClass" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectSize" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectEa" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectSite" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectResult" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectAmount" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectYear" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectBrand" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectBuyer" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectPo" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectManufactureNo" onChange={(e) => handleChange(e)}/>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          )}
          {registedPerformance && registedPerformance.length > 0 && registedPerformance.map((item: any, index: number) => (
            <tr key={index}>
              <th>실적</th>
              <td>
                <div className="tableWrap" style={{marginBottom: '20px'}}>
                  <div className="btnBox" style={{marginBottom: '10px'}}>
                    <button className="blackBtn" onClick={() => modifyTable(index)}>수정</button>
                    &nbsp;<button className="blackBtn" onClick={() => deleteTable(item?.ID)}>삭제</button>
                  </div>
                  <div className="tableType_a thumb" style={{overflowX: 'auto', maxWidth: '1300px'}}>
                    <table style={{minWidth: '2500px'}}>
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
                        <th scope="col">YEAR OF SUPPLY</th>
                        <th scope="col">BLAND</th>
                        <th scope="col">납품처</th>
                        <th scope="col">PO NO.</th>
                        <th scope="col">생산의뢰서 NO</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectDate" onChange={(e) => handleChange(e, index)} value={item?.projectDate}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectUser" onChange={(e) => handleChange(e, index)} value={item?.projectUser}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectName" onChange={(e) => handleChange(e, index)} value={item?.projectName}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectEpc" onChange={(e) => handleChange(e, index)} value={item?.projectEpc}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectItem" onChange={(e) => handleChange(e, index)} value={item?.projectItem}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectRemark" onChange={(e) => handleChange(e, index)} value={item?.projectRemark}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectMaterial" onChange={(e) => handleChange(e, index)} value={item?.projectMaterial}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectClass" onChange={(e) => handleChange(e, index)} value={item?.projectClass}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectSize" onChange={(e) => handleChange(e, index)} value={item?.projectSize}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectEa" onChange={(e) => handleChange(e, index)} value={item?.projectEa}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectSite" onChange={(e) => handleChange(e, index)} value={item?.projectSite}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectResult" onChange={(e) => handleChange(e, index)} value={item?.projectResult}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectAmount" onChange={(e) => handleChange(e, index)} value={item?.projectAmount}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectYear" onChange={(e) => handleChange(e, index)} value={item?.projectYear}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectBrand" onChange={(e) => handleChange(e, index)} value={item?.projectBrand}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectBuyer" onChange={(e) => handleChange(e, index)} value={item?.projectBuyer}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectPo" onChange={(e) => handleChange(e, index)} value={item?.projectPo}/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text" name="projectManufactureNo" onChange={(e) => handleChange(e, index)} value={item?.projectManufactureNo}/>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          ))}

          <AdminDateBox2
            data={data}
            onChange={handleSelect}
          />
          </tbody>
        </table>
      </div>
    </div>
  )
}
