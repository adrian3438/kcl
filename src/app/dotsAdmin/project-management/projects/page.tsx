'use client';

import {useRouter} from "next/navigation";
import {useState} from "react";
import ImageUploadBox from "@/components/DotsAdmin/Element/ImageUploadBox";
import TextBox from "@/components/DotsAdmin/Element/TextBox";
import TextAreaBox from "@/components/DotsAdmin/Element/TextAreaBox";
import AdminDateBox2 from "@/components/DotsAdmin/Element/DateBox2"

export default function Projects({searchParams : {id}} : any) {
  const router = useRouter();

  const [data, setData] = useState({
    contentType: '1',
    thumnailImage : null,
    subject: '',
    excerpt: '',
    projectImage: [],
    date: '',
  });
  const [previewImage, setPreviewImage] = useState<any>({thumnailImage : null})

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

  return(
    <div className="contentBox add">
      <h3>Projects</h3>
      <div className="flexBox">
        <div>
          <h4>{id ? '프로젝트 수정' : '프로젝트 등록'}</h4>
        </div>
        <div className="btnBox">
          <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
          <button className="blueBtn">{id ? '수정하기' : '저장하기'}</button>
        </div>
      </div>

      <div className="input_tableWrap">
        <table>
          <tbody>
          <tr>
            <th>컨텐츠 유형 <span className="star">*</span></th>
            <td>
              <div className="selectContainer">
                <div className="selectWrap">
                  <div className="selectBox">
                    <select value={data?.contentType} name="contentType" onChange={(e)=>handleSelect(e)} id="">
                      {/*{contentsType?.map((contents : any, index : number) => (
                        <option key={index} value={contents?.codeId}>{contents?.codeName}</option>
                      ))}*/}
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
                <input type="file" id={`image-1`} name='projectImage' onChange={(e) => handleImageChange(e)}/>
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
          <tr>
            <th>정보</th>
            <td>
              <div className="tableWrap">
                <div className="tableType_a thumb">
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
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tableType_a thumb">
                  <table>
                    <thead>
                    <tr>
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
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
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
