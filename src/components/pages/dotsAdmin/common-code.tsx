'use client'

import TextBox from "@/components/DotsAdmin/Element/TextBox"
import api from "@/lib/api"
// import Head from "next/head"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
interface Props {
    id : any
}
export default function CommonCodeViewPage ({id} : Props) {
    const router = useRouter()
    // const query = useSearchParams()
    // const id = query.get('id')
    const [data, setData] = useState<any>({
        codeNameKr : '' , codeNameEn : ''
    })

    async function save () {
        try {
            if(!data?.codeNameKr){alert('국문명을 입력해주시기 바랍니다.'); return;}
            if(!data?.codeNameEn){alert('영문명을 입력해주시기 바랍니다.'); return;}
            const formData = new FormData()
            if(id){formData.append('codeId', id)}
            formData.append('codeNameKr', data?.codeNameKr)
            formData.append('codeNameEn', data?.codeNameEn)
            if(id){
                try{
                    const response = await api.post(`/admin/code/updContentsType.php` , formData)
                    if(response?.data?.result === true) {
                        alert(response?.data?.resultMsg); router.back()
                    }
                    else{alert(response?.data?.resultMsg);}
                }catch{alert('Server Error')}
            }else{
                try{
                    const response = await api.post(`/admin/code/setContentsType.php`, formData)
                    if(response?.data?.result === true) {
                        alert(response?.data?.resultMsg);
                        router.push(`/admin/common-code-management/common-code-list`)
                    }
                    else{alert(response?.data?.resultMsg);}
                }catch{alert('Server Error')}
            }
        }catch{
            alert('Server Error')
        }
    }
    useEffect(()=> {
        async function fetchDetail() {
            if (id) {
                try {
                    const response = await api.get(`/admin/code/getContentsTypeDetail.php?codeId=${id}`)
                    if (response?.data?.result === true) {
                        if (response?.data?.list?.length > 0) {
                            const data = response?.data?.list[0];
                            setData({ codeNameKr: data?.codeNameKr, codeNameEn: data?.codeNameEn });
                        }
                    } else {
                        alert(response?.data?.resultMsg);
                    }
                } catch {
                    alert('Server Error');
                }
            }
        }

        fetchDetail();
    }, [id])
    return(
        <>

        <div className="contentBox add">
            <h3>Common Code</h3>
            <div className="flexBox">
                <div>
                    <h4>컨텐츠 유형 관리</h4>
                </div>
                <div className="btnBox">
                    <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                    <button className="blueBtn" onClick={()=>save()}>저장하기</button>
                </div>
            </div>

            <div className="input_tableWrap">
                <table>
                    <tbody>
                        <TextBox
                            title={'컨텐츠 유형명(국문)'}
                            name={'codeNameKr'}
                            value={data?.codeNameKr}
                            setData={setData}
                        />
                        <TextBox
                            title={'컨텐츠 유형명(영문)'}
                            name={'codeNameEn'}
                            value={data?.codeNameEn}
                            setData={setData}
                        />
                    </tbody>
                </table>
            </div>

        </div>
        </>
    )
}
