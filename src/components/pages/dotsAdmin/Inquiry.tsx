'use client'

// import Summernote from "@/components/DotsAdmin/Editor/Summernote"
import api from "@/lib/api"
import { useRouter } from "next/navigation"
import {useEffect, useState} from "react"
import fileDownLoad from "@/components/useFileDownload";

interface Props {
    id : any
}
export default function InquiryPage ({id} : Props) {
    const router = useRouter()
    const [data, setData] = useState<any>(null)
    const [isActive , setActive] = useState<boolean>(false)
    /*async function save () {

    }*/
    async function reply (status : string) {
        if(status !== data?.replyStatus){
            const confirmMsg = status === 'R' ? '답변 처리를 하시겠습니까?' : '답변 전으로 복원하시겠습니까?';
            const confirm = window.confirm(confirmMsg);
            if(confirm) {
                try {
                    const formData = new FormData()
                    formData.append('inquiryId' , id)
                    formData.append('replyStatus' , status)
                    const response = await api.post(`/admin/inquiry/updInquiryReplyStatus.php`, formData)
                    if(response?.data?.result === true) { alert(response?.data?.resultMsg); router.back(); }
                }catch { alert('Server Error'); }
            }
        }
    }
    useEffect(()=>{
        async function fetchDetail () {
            if(id) {
                try {
                    const response = await api.get(`/admin/inquiry/getInquiryDetail.php?ID=${id}`)
                    if(response?.data?.result === true) {
                        setData(response?.data)
                    }else{
                        alert(response?.data?.resultMsg)
                    }
                }catch {alert('Server Error')}
            }
        }
        fetchDetail()
    }, [id])
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
            const link = document.createElement("link")
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
        <div className="contentBox inquiry_common">
            <h3>Inquiry</h3>
            <div className="flexBox">
                <div>
                    <h4>고객문의</h4>
                </div>
                <div className="btnBox">
                    <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                </div>
            </div>

            <div className="titleBox">
                <div>
                    {data?.replyStatus === 'U'?
                    <button className={isActive ? 'red active' : 'red'} onClick={()=>setActive(!isActive)}>
                        답변전
                    </button> : ''}
                    {data?.replyStatus !== 'U' ?
                    <button className={isActive ? 'blue active' : 'blue'} onClick={()=>setActive(!isActive)}>
                        답변완료
                    </button>
                    :''
                    }
                    <div>
                        <span onClick={()=>reply("U")}>답변전</span>
                        <span onClick={()=>reply("R")}>답변완료</span>
                    </div>
                </div>
                <h5>{}</h5>
            </div>

            <div className="before">
                <div className="inquiry_table">
                    <ul>
                        <li>
                            <div>
                                <span>문의 유형</span>
                                <span>
                                    {data?.inquiryType === 'P' && '제품문의'}
                                    {data?.inquiryType === 'T' && '기술문의'}
                                    {data?.inquiryType === 'O' && '기타문의'}
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>회사명</span>
                                <span>{data?.inquiryCompanyName}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>이름</span>
                                <span>{data?.inquiryName}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>직급</span>
                                <span>{data?.inquiryPosition}</span>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div>
                                <span>이메일</span>
                                <span>{data?.inquiryEmail}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>연락처</span>
                                <span>{data?.inquiryPhone}</span>
                            </div>
                        </li>
                        {/*<li>
                            <div>
                                <span>연락가능시간</span>
                                <span>{data?.availableTime}</span>
                            </div>
                        </li>*/}
                        {/*<li>
                            <div>
                                <span>광고성정보수신동의</span>
                                <span>{data?.adsAgreeStatus === 'Y' ? '동의' : '미동의'}</span>
                            </div>
                        </li>*/}
                    </ul>

                    <div className="fileName">
                        <span>문의제목</span>
                        <div>
                            {data?.inquirySubject}
                        </div>
                    </div>

                    <div className="inquiry_details">
                        <span>문의내용</span>
                        <div dangerouslySetInnerHTML={{
                            __html: data?.inquiryContent
                        }}>
                        </div>
                    </div>

                    <div className="inquiry_details">
                        <span>앤드 유저 정보 및 이 RFQ의 최종 설치 위치</span>
                        <div dangerouslySetInnerHTML={{
                            __html: data?.inquiryDetail1
                        }}>
                        </div>
                    </div>

                    <div className="inquiry_details">
                        <span>프로젝트 명칭 및 RFQ 상태 세부정보(구매 또는 예산 책정용)</span>
                        <div dangerouslySetInnerHTML={{
                            __html: data?.inquiryDetail2
                        }}>
                        </div>
                    </div>

                    <div className="inquiry_details">
                        <span>귀사 정보(국가, 기업형태: 무역, 엔지니어링, 최종 사용자 등)</span>
                        <div dangerouslySetInnerHTML={{
                            __html: data?.inquiryDetail3
                        }}>
                        </div>
                    </div>

                    <div className="inquiry_details">
                        <span>KCL에 대해 어떻게 알고 연락하게 되었습니까?</span>
                        <div dangerouslySetInnerHTML={{
                            __html: data?.inquiryDetail4
                        }}>
                        </div>
                    </div>

                    <div className="fileName">
                        <span>첨부파일</span>
                        {data?.attachedFilename ?
                          <div>
                              <span onClick={() => fileDownLoad(data?.attachedFilename, data?.attachedFile)}>{data?.attachedFilename}</span>
                          </div>
                          : ''
                        }
                    </div>
                </div>

                {/*{data?.replyStatus === 'U' ?

                <div className="answerBox">
                    <h5>문의답변</h5>
                    <Summernote
                        initData={data?.description}
                        setData={setData}
                        name={'description'}
                    />
                </div>

                :

                <div className="inquiry_table">
                    <div className="inquiry_details">
                        <span>답변내용</span>
                        <div dangerouslySetInnerHTML={{__html : data?.replyList?.length > 0 &&
                            data?.replyList[0]?.replyContent}}>
                        </div>
                    </div>
                </div>
                }*/}


                {/*<div className="btnBox">
                     <button className="blackBtn">초기화</button>
                    {data?.replyStatus === 'U' ?
                    <>
                    <button className="blueBtn" onClick={()=>reply('R')}>답변하기</button>
                    </>
                    : ''
                    }
                </div>*/}
            </div>

        </div>
        </>
    )
}
