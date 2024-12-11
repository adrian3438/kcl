'use client'
import SelectContentsModifyBox from "@/components/DotsAdmin/Contents/SelectEditBox";
// import ListBusinessTypeBox from "@/components/DotsAdmin/List/ListBusinessTypeBox";
import ListContentsTypeBox from "@/components/DotsAdmin/List/ListContentsTypeBox";
import ListFilter from "@/components/DotsAdmin/List/ListFilter";
import ListSearchBox from "@/components/DotsAdmin/List/ListSearchBox";
import ListSizeBox from "@/components/DotsAdmin/List/ListSizeBox";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import calCulateIndex from "@/components/calculateIndex";

interface Props {
    contentsType : any,
    businessType : any,
    page : any,
    size : any,
    keyword : string,
    column : string,
    order : string
}

export default function ContentsListPage ({
  contentsType , businessType , page , size , keyword , column , order
} : Props) {
    const router = useRouter()
    const langWrapRef = useRef<any>(null)
    // const query = useParams()
    const [data, setData] = useState<any>([])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [totalCount, setTotalCount] = useState<number>(0)
    const [popup, setPopup] = useState<any>({id : '', lang : '', contentType : '', status : '', masterId : ''})
    async function getList () {
        try{
            const response = await api.get(`/admin/contents/getContentsList.php?promLang=KR&contentsType=${contentsType}&businessDivisionType=${businessType}&page=${page}&size=${size}&keyword=${keyword}&sortColumn=promDate&sortOrder=${order}`)
            if(response.data.result === true) {
                setData(response.data.list);
                setTotalCount(response.data.totalCnt);
            }

            else alert(response.data.resultMsg)
        }catch {alert('Server Error')}
    }
    async function statusChange (id : any, status : string) {
        try {
            const formData = new FormData()
            formData.append('ID', id)
            formData.append('activeStatus', status === 'Y' ? 'N' : 'Y')
            const response = await api.post(`/admin/contents/updContentActiveStatus.php`, formData)
            if(response?.data?.result === true) {getList()}
            else {alert(response.data.resultMsg)}
        }catch {alert('Server Error')}
    }
    async function handleContentsCopy (id : any) {
        const confirm = window.confirm('해당 게시글을 영문으로 복제하시겠습니까?')
        if(confirm) {
            const res = await api.get(`/admin/contents/updContentToEn.php?contentDetailId=${id}`)
            if(res.data.result === true) {alert('영문 복제가 완료되었습니다.'); getList();}
            else {alert('복제 중 오류가 발생하였습니다.')}
        }else{return;}
    }
    function selectContents (id : any, lang: string, contentType : any, status : any, masterId : any) {
        setPopup({id : id, lang : lang, contentType : contentType, status : status, masterId : masterId})
    }
    useEffect(() => {
        function handleClickOutside(e:any) {
            if (langWrapRef.current && !langWrapRef.current.contains(e.target)) {
                setPopup({ id: '', lang: '', contentType : '', status : '', masterId : ''});
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(()=>{
        getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[contentsType, businessType, page, size, keyword, column, order])
    return(
        <>
            <div className="contentBox content_management">
                <h3>Content</h3>
                <div className="flexBox">
                    <div>
                        <h4>컨텐츠 리스트</h4>
                    </div>
                </div>

                <div className="toolBox">
                    <div className="left">

                        <div className="selectBox">
                            <ListSizeBox
                                size={size}
                            />
                        </div>

                        <div>

                            <ListContentsTypeBox
                                contentsTypeId={contentsType}
                            />

                            {/*<ListBusinessTypeBox
                                businessTypeId={businessType}
                            />*/}

                            <ListSearchBox
                                keyword={keyword}
                            />
                        </div>
                    </div>

                    <div className="right">
                        <div className="btnBox">
                            <button className="blueBtn" onClick={()=>router.push(`/dotsAdmin/contents-management/contents`)}>신규등록</button>
                        </div>
                    </div>
                </div>

                <div className="tableWrap">
                    <div className="tableType_a thumb">
                        <table>

                            <ListFilter

                            />

                            <tbody>
                            {data?.map((list:any, index:number) => (
                                <tr key={index}>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/contents?c=${contentsType}&id=${list?.contentDetailKrId}&lang=${'KR'}`)}>
                                    <span className="readOnly">
                                        {calCulateIndex(page , size , totalCount , index)}
                                    </span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/contents?c=${contentsType}&id=${list?.contentDetailKrId}&lang=${'KR'}`)}>
                                        <span className="readOnly">{list?.contentTypeNameKr}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/contents?c=${contentsType}&id=${list?.contentDetailKrId}&lang=${'KR'}`)}>
                                        <div className="imgBox">
                                            <Image src={list?.thumnailImage ? list?.thumnailImage : '/images/admin/DK-LOK-no-images.png'} alt="thumbmail" width={100} height={50}/>
                                        </div>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/contents-management/contents?c=${contentsType}&id=${list?.contentDetailKrId}&lang=${'KR'}`)}>
                                        <span className="readOnly">{list?.contentName}</span>
                                    </td>
                                    <td>
                                        <div className="langWrap">
                                            <div className="langBox">
                                                <button
                                                    className={list?.publishStatusKr === 'Y' ? 'lang_ko' : 'lang_ko none'}
                                                    onClick={()=>selectContents(list?.contentDetailKrId, 'kr', list?.contentType, list?.publishStatusKr, list?.contentMasterId)}
                                                >
                                                </button>
                                                {list?.contentDetailKrId === popup?.id && popup?.lang === 'kr' ?

                                                    <SelectContentsModifyBox
                                                        id={popup?.id}
                                                        contentType={popup?.contentType}
                                                        status={popup?.status}
                                                        lang={'KR'}
                                                        setPopup={setPopup}
                                                        masterId={popup?.masterId}
                                                        refetch={getList}
                                                    />
                                                    : ''

                                                }
                                                 {list?.contentDetailEnId ?
                                            <>
                                                <button
                                                className={list?.publishStatusEn === 'Y' ? 'lang_en' : 'lang_en none'}
                                                onClick={()=>selectContents(list?.contentDetailEnId, 'en', list?.contentType, list?.publishStatusEn, list?.contentMasterId)}
                                                >
                                                </button>
                                                {list?.contentDetailEnId === popup?.id && popup?.lang === 'en' ?

                                                <SelectContentsModifyBox
                                                    id={popup?.id}
                                                    contentType={popup?.contentType}
                                                    status={popup?.status}
                                                    lang={'EN'}
                                                    setPopup={setPopup}
                                                    masterId={popup?.masterId}
                                                    refetch={getList}
                                                />

                                                : ''

                                                }
                                            </> : ''
                                            }

                                            {!list?.contentDetailEnId &&
                                                // 복제할 때는 한국어 게시글 아이디 들고 복제
                                                <div className="langBox">
                                                   <button className="lang_add en" onClick={()=>handleContentsCopy(list?.contentDetailKrId)}></button>
                                                </div>
                                            }
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="toggleSwitchBox">
                                        <span className="toggleSwitch">
                                            <input
                                                type="checkbox"
                                                id={`contents_${list?.contentMasterId}`}
                                                className="toggleIpt"
                                                onChange={()=>statusChange(list?.contentMasterId, list?.contentActiveStatus)}
                                                checked={list?.contentActiveStatus === 'Y'}
                                                hidden
                                            />
                                            <label htmlFor={`contents_${list?.contentMasterId}`}  className="toggleSwitch">
                                                <span className="toggleButton"></span>
                                            </label>
                                        </span>
                                        </div>
                                    </td>
                                    <td>
                                    <span className="readOnly">
                                        {list?.contentMdate}
                                    </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="pagerBox">
                    <p>Showing 1 to 10 of 98 entries</p>

                </div>

            </div>
        </>
    )
}
