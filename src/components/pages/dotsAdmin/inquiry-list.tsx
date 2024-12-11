'use client'
import ListFilter from "@/components/DotsAdmin/List/ListFilter";
import ListInquiryReplyBox from "@/components/DotsAdmin/List/ListInquiryReplyBox";
import ListInquiryTypeBox from "@/components/DotsAdmin/List/ListInquiryTypeBox";
import ListSearchBox from "@/components/DotsAdmin/List/ListSearchBox";
import ListSizeBox from "@/components/DotsAdmin/List/ListSizeBox";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import calCulateIndex from "@/components/calculateIndex";

interface Props {
    inquiryType : string
    page : number
    size : number
    keyword : string
    column : string
    order : string
    replyStatus : string
}
export default function InquiryListPage ({
    inquiryType, page, size, keyword, column , order, replyStatus
}: Props) {
    const router = useRouter()
    const [data, setData] = useState<any>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [totalCount , setTotalCount] = useState<number>(0)
    async function getList () {
        try {
            const response = await api.get(`/admin/inquiry/getInquiryList.php?inquiryType=${inquiryType}&replyStatus=${replyStatus}&page=${page}&size=${size}&keyword=${keyword}&sortColumn=${column}&sortOrder=${order}`);
            if(response?.data?.result === true) {
                setData(response?.data?.list); setTotalCount(response?.data?.total_cnt)
            }else{
                alert(response?.data?.resultMsg)
            }
        }catch {alert('Server Error')}
    }
    useEffect(()=>{
        getList()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, size, keyword, column, order, inquiryType, replyStatus])
    return(
        <>
        <div className="contentBox contactUs">
            <h3>Inquiry</h3>
            <div className="flexBox">
                <div>
                    <h4>고객문의 리스트</h4>
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

                        <ListInquiryTypeBox
                            inquiryType={inquiryType}
                        />

                        <ListInquiryReplyBox
                            replyStatus={replyStatus}
                        />
                    </div>
                </div>

                <div className="right">

                    <ListSearchBox
                        keyword={keyword}
                    />

                </div>
            </div>

            <div className="tableWrap">
                <div className="tableType_a">
                    <table>

                        <ListFilter

                        />

                        <tbody>
                            {data?.map((list: any, index: number) => (
                            <tr key={list?.ID}>
                                <td>
                                    <span className="readOnly">
                                        {calCulateIndex(page , size , totalCount , index)}
                                    </span>
                                </td>
                                <td>
                                    <span className="readOnly">
                                    {list?.inquiryType === 'P' && '제품문의'}
                                    {list?.inquiryType === 'T' && '기술문의'}
                                    {list?.inquiryType === 'O' && '기타문의'}
                                    </span>
                                </td>
                                <td>
                                    <span className="readOnly">{list?.inquiryCompanyName}</span>
                                </td>
                                <td>
                                    <span className="readOnly">{list?.inquiryName}</span>
                                </td>
                                <td>
                                    <span className="readOnly">{list?.inquiryPosition}</span>
                                </td>
                                <td>
                                    <span className="readOnly">{list?.inquiryEmail}</span>
                                </td>
                                <td>
                                    <span className="readOnly">{list?.inquiryPhone}</span>
                                </td>
                                <td>
                                    <div className="inquiryBox">
                                        <span className="readOnly ellipsis">
                                            -
                                        </span>
                                        <div>
                                            <div>
                                                <div>
                                                    {list?.inquiryContents}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="readOnly">{list?.createDate}</span>
                                </td>
                                <td onClick={()=>router.push(`/dotsAdmin/inquiry-management/inquiry?id=${list?.ID}`)}>
                                    <div className="statUsBox">
                                        {list?.replyStatus === 'U' ?
                                        <span className="red">답변전</span>
                                        :
                                        <span className="blue">답변완료</span>
                                        }
                                    </div>
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
