'use client'

import ChipInputBox from "@/components/DotsAdmin/ChipInput/chipInput"
import Summernote from "@/components/DotsAdmin/Editor/Summernote"
import ImageUploadBox from "@/components/DotsAdmin/Element/ImageUploadBox"
import TextAreaBox from "@/components/DotsAdmin/Element/TextAreaBox"
import TextBox from "@/components/DotsAdmin/Element/TextBox"
import api from "@/lib/api"
import { useAppSelector } from "@/store/hooks"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import AdminDateBox from "@/components/DotsAdmin/Element/DateBox"
interface Props {
    id : any
    lang : any
}
export default function ContentsPage ({
                                          id, lang
                                      } : Props) {
    const router = useRouter()
    // const query = useSearchParams()
    const managerInfo = useAppSelector((state) => state.userData.users.users)

    const [contentsType , setContentsType] = useState<[]>([])
    const [businessType , setbusinessType] = useState<[]>([])
    const [data, setData] = useState<any>({
        // 컨텐츠 유형 , 사업영역 유형  , 검색키워드 , 제목
        contentType : '1', businessType : '3', searchKeyword : [], subject : '',
        // 전시기간 , 전시장소 , 전시 사업분야 , 전시 웹사이트 , 발췌내용
        excerpt : '',
        // 컨텐츠 내용 , 썸네일 이미지 , 첨부 파일
        description : '', thumnailImage : null, attachedFile : null,
        date: '',
        // facebook : '', linkedIn : '', youtube : '', twitter : '', prirorityNews : 'N', noticePrirority : 'N', pressCenter : '', pressUrl : '',
    })
    const [previewImage, setPreviewImage] = useState<any>({thumnailImage : null})
    // const [fileName , setFileName] = useState<string>('')
    function handleSelect (e:React.ChangeEvent<HTMLSelectElement>) {
        const {name , value} = e.target;
        setData((prev:any) => ({...prev, [name] : value}))
    }
    async function save () {
        try {
            if(!data?.description) {alert('컨텐츠 내용은 필수 입력입니다.'); return;}
            if(!data?.date) {alert('보도일자 선택은 필수입니다.'); return;}
            const formData = new FormData()
            if(id){
                formData.append('ID', id)
                formData.append('lang', lang)
            }else{
                formData.append('managerId', managerInfo?.ID || 1);
                formData.append('managerName', managerInfo?.name || '관리자')
            }
            formData.append('contentType' , data?.contentType)
            formData.append('businessDivitionType', data?.businessType)
            if(data?.thumnailImage){
                formData.append('thumnailImage', data?.thumnailImage);
            }
            if(data?.attachedFile) {
                formData.append('attachedFile', data?.attachedFile)
            }
            formData.append('subject', data?.subject ? data?.subject : '');
            formData.append('searchKeywords', data?.searchKeyword ? data?.searchKeyword : '');
            formData.append('excerpt', data?.excerpt ? data?.excerpt : '');
            formData.append('description', data?.description ? data?.description :'');
            formData.append('promInsertDate', data?.date ? data?.date :'');

            if(id) {
                const response = await api.post(`/admin/contents/updContent.php`, formData)
                if(response?.data?.result === true) {
                    alert(response?.data?.resultMsg); router.back()
                }else{
                    alert(response?.data?.resultMsg);
                }
            }else{
                const response = await api.post(`/admin/contents/setContent.php`, formData)
                if(response?.data?.result === true) {
                    alert(response?.data?.resultMsg); router.push(`/dotsAdmin/contents-management/contents-list/`)
                }else{
                    alert(response?.data?.resultMsg);
                }
            }
        }catch{
            alert('Server Error')
        }
    }
    useEffect(() => {
        async function fetchDetail () {
            if(id && lang) {
                try{
                    const response = await api.get(`/admin/contents/getContentDetail.php?contentDetailId=${id}&lang=${lang}`)
                    if(response?.data?.result == true) {
                        const data = response?.data?.list[0];
                        const fomatSearchKeyword = data?.searchKeywords?.split(',')
                        setData((prev:any) => ({...prev, contentType : data?.contentType, subject : data?.contentName,
                            facebook : data?.facebookUrl, linkedIn : data?.linkedinUrl, youtube : data?.youtubeUrl, twitter : data?.twitterUrl,
                            searchKeyword : fomatSearchKeyword, excerpt : data?.promExcerpt, description : data?.promDescription,
                            businessType : data?.businessDivisionType, date: data?.mdate,
                        }))
                        setPreviewImage((prev:any) => ({...prev, thumnailImage : data?.thumnailImage}))
                    }else {
                        alert(response?.data?.resultMsg)
                    }
                }catch {alert('Server Error')}
            }
        }
        fetchDetail()
    }, [id, lang])
    useEffect(() => {
        async function fetchTypeList () {
            const res1 = await api.get(`/admin/code/getContentsTypeList.php`);
            const res2 = await api.get(`/admin/code/getBusinessDivisionTypeList.php`);
            if(res1?.data?.result === true) {setContentsType(res1?.data?.List)}
            if(res2?.data?.result === true) {setbusinessType(res2?.data?.List)}
        }
        fetchTypeList()
    }, [])
    useEffect(() => {
        const links = [
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
            },
            {
                rel: "stylesheet",
                href: "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css"
            }
        ];

        links.forEach(({ rel, href }) => {
            const link = document.createElement("link");
            link.rel = rel;
            link.href = href;
            document.head.appendChild(link);
        });

        // Cleanup function to remove the links when the component is unmounted or updated
        return () => {
            links.forEach(({ href }) => {
                const link = document.querySelector(`link[href="${href}"]`);
                if (link) {
                    document.head.removeChild(link);
                }
            });
        };
    }, []);
    return(
        <>

            <div className="contentBox add">
                <h3>Contents</h3>
                <div className="flexBox">
                    <div>
                        <h4>콘텐츠</h4>
                    </div>
                    <div className="btnBox">
                        <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                        <button className="blueBtn" onClick={()=>save()}>{id ? '수정하기' : '저장하기'}</button>
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
                                                {contentsType?.map((contents : any, index : number) => (
                                                    <option key={index} value={contents?.codeId}>{contents?.codeName}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>사업영역 유형 <span className="star">*</span></th>
                            <td>
                                <div className="selectContainer">
                                    <div className="selectWrap">
                                        <div className="selectBox">
                                            <select value={data?.businessType} name="businessType" onChange={(e)=>handleSelect(e)}>
                                                {businessType?.map((contents : any, index : number) => (
                                                    <option key={index} value={contents?.codeId}>{contents?.codeName}</option>
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
                        {/* <TextBox
                            title={'페이스북 링크'}
                            name={'facebook'}
                            value={data?.facebook}
                            setData={setData}
                        />
                        <TextBox
                            title={'링크드인 링크'}
                            name={'linkedIn'}
                            value={data?.linkedIn}
                            setData={setData}
                        />
                        <TextBox
                            title={'유튜브 링크'}
                            name={'youtube'}
                            value={data?.youtube}
                            setData={setData}
                        />
                        <TextBox
                            title={'X 링크'}
                            name={'twitter'}
                            value={data?.twitter}
                            setData={setData}
                        /> */}
                        {/* <tr>
                            <th>보도일자 <span className="star">*</span></th>
                            <td>
                                <div className="dateBox">
                                    <input type="date" value={data?.date} name="date" id="date"/>
                                </div>
                            </td>
                        </tr> */}
                        <tr>
                            <th>검색 키워드 <span className="star">*</span></th>
                            <td>
                                <ChipInputBox
                                    data={data}
                                    setData={setData}
                                />
                                <p className="infoTxt">검색 키워드는 디케이락 회원이 등록된 컨텐츠을 검색할 경우 사용됩니다. 개별 키워드 입력 후 엔터키로 등록하시면 됩니다.</p>
                            </td>
                        </tr>
                        <TextAreaBox
                            title={'발췌'}
                            name={'excerpt'}
                            value={data?.excerpt}
                            description={'발췌 글은 컨텐츠의 요약 내용으로 반드시 입력되어야 합니다.'}
                            setData={setData}
                        />
                        <tr>
                            <th>내용 <span className="star">*</span></th>
                            <td>
                                {id && data?.description ?
                                    <Summernote
                                        initData={data?.description}
                                        setData={setData}
                                        name={'description'}
                                    /> : ''
                                }
                                {!id ?
                                    <Summernote
                                        initData={data?.description}
                                        setData={setData}
                                        name={'description'}
                                    /> : ""
                                }
                            </td>
                        </tr>

                        <AdminDateBox
                            data={data}
                            onChange={handleSelect}
                        />

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
