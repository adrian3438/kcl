'use client'
import ListFilter from "@/components/DotsAdmin/List/ListFilter";
// import ListSearchBox from "@/components/DotsAdmin/List/ListSearchBox";
// import ListSizeBox from "@/components/DotsAdmin/List/ListSizeBox";
import api from "@/lib/api";
// import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function CommonCodeListPage () {
    const router = useRouter()
    const [data, setData] = useState<[]>([])
    // const [totalCount , setTotalCount] = useState<number>(0)
    async function getList () {
        try {
            const response = await api.get(`/admin/code/getContentsTypeList.php`)
            if(response?.data?.result === true) {setData(response?.data?.List)}
            else {alert(response?.data?.resultMsg); setData([])}
        }catch{
            alert('Server Error')
        }
    }
    async function statusChange (id : number , status : string){
        try{
            const formData : number | string | any = new FormData()
            formData.append('codeId', id)
            formData.append('activeStatus', status === 'Y' ? 'N' : 'Y')
            const response = await api.post(`/admin/code/updContentsTypeActiveStatus.php`, formData)
            if(response?.data?.result === true) getList()
            else alert(response?.data?.resultMsg)
        }catch{alert('Server Error')}
    }
    useEffect(()=>{getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <>
        <div className="contentBox whistleBlow">
            <h3>Common Code</h3>
            <div className="flexBox">
                <div>
                    <h4>공용코드 관리</h4>
                </div>
            </div>

            <div className="toolBox">
                <div className="left">
                    <div className="selectBox">
                        {/* <ListSizeBox

                        /> */}
                    </div>
                </div>

                <div className="right">
                    <div className="btnBox">
                        {/* <button className="blueBtn" onClick={()=>router.push(`/dotsAdmin/common-code-management/common-code`)}>신규등록</button> */}
                    </div>
                    {/* <ListSearchBox

                    /> */}
                </div>
            </div>

            <div className="tableWrap">
                <div className="tableType_a">
                    <table>
                        <ListFilter

                        />
                        <tbody>
                            {data?.map((list:any) => (
                                <tr key={list?.codeId} style={{cursor : 'pointer'}}>
                                    <td onClick={()=>router.push(`/dotsAdmin/common-code-management/common-code?id=${list?.codeId}`)}>
                                        <span className="readOnly">{1}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/common-code-management/common-code?id=${list?.codeId}`)}>
                                        <span className="readOnly">{list?.codeName}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/common-code-management/common-code?id=${list?.codeId}`)}>
                                        <span className="readOnly">{list?.codeId}</span>
                                    </td>
                                    <td onClick={()=>router.push(`/dotsAdmin/common-code-management/common-code?id=${list?.codeId}`)}>
                                        <span className="readOnly">{list?.createDate}</span>
                                    </td>
                                    <td>
                                        <div className="toggleSwitchBox">
                                            <span className="toggleSwitch">
                                                <input
                                                type="checkbox"
                                                id={`commoncode_${list?.codeId}`}
                                                className="toggleIpt"
                                                checked={list?.activeStatus === 'Y'}
                                                onChange={()=>statusChange(list?.codeId, list?.activeStatus)}
                                                hidden
                                                />
                                                <label htmlFor={`commoncode_${list?.codeId}`} className="toggleSwitch">
                                                    <span className="toggleButton"></span>
                                                </label>
                                            </span>
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
                =
            </div>
        </div>
        </>
    )
}
