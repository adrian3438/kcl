'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import ImageUploadBox from "@/components/DotsAdmin/Element/ImageUploadBox";
import TextBox from "@/components/DotsAdmin/Element/TextBox";
import TextAreaBox from "@/components/DotsAdmin/Element/TextAreaBox";
import AdminDateBox2 from "@/components/DotsAdmin/Element/DateBox2"
import api from "@/lib/api";

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

  function handleRemoveFile(index: number) {
    setData((prev: any) => ({
      ...prev,
      projectImage: prev.projectImage.filter((_: any, i: number) => i !== index), // 선택한 파일 제거
    }));
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

  //TODO: 저장
  async function save() {
    const formData = new FormData();
    formData.append('projectGroupId', data?.projectGroupId);
    if(data?.thumnailImage){
      formData.append('thumbnailImage', data?.thumnailImage);
    }
    formData.append('projectName', data?.subject);
    formData.append('projectDescription', data?.excerpt);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    formData.append('projectImage', data?.projectImage);
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
        const response = await api.post('/admin/code/getProjectGroupList2.php', formData);
        console.log('response : ', response);
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
          // thumnailImage : null,
          subject: data?.projectName,
          excerpt: data?.projectDescription,
          // projectImage: [],
          inputDate: data?.createDate,
        }))
        setPreviewImage((prev:any) => ({...prev, thumnailImage : data?.thumbnailFile}));
      }else {
        alert(response?.data?.resultMsg)
      }
    } catch {
      alert('Server Error');
    }
  }

  useEffect(() => {
    if(id) {
      getProjectDetail();
    }
  }, [id]);



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
                      <option>test</option>
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
          <tr>
            <th>프로젝트 이미지 <span className="star">*</span></th>
            <td>
              <div className="imgUploadBox imgUploadBox_before">
                <input type="file" id={`image-1`} name='projectImage' onChange={(e) => handleImageChange(e)} multiple/>
                <label htmlFor={`image-1`} className="imgUploadBtn imgUploadBtn_before">
                  <i className="fa-light fa-upload"></i>
                  파일 선택
                </label>
                {data?.projectImage && data?.projectImage.length > 0 && data?.projectImage.map((item: any, index: number) => (
                  <p key={index}>
                    {item.name} <button type="button" onClick={() => handleRemoveFile(index)}>X</button>
                  </p>
                ))}
              </div>
            </td>
          </tr>
          {id && (
            <tr>
              <th>정보</th>
              <td>
                <div className="btnBox" style={{marginBottom: '20px', textAlign: 'right'}}>
                  <button className="blackBtn">등록</button>
                </div>
                <div className="tableWrap" style={{marginBottom: '20px'}}>
                  <div className="btnBox" style={{marginBottom: '10px'}}>
                    <button className="blackBtn">수정</button>
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
                        <th scope="col">REMARK</th>
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
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tableWrap">
                  <div className="btnBox" style={{marginBottom: '10px'}}>
                    <button className="blackBtn">수정</button>
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
                        <th scope="col">REMARK</th>
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
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="inputBox">
                            <input type="text"/>
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
