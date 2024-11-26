'use client'
import ListFilter from "@/components/DotsAdmin/List/ListFilter";
import ListSearchBox from "@/components/DotsAdmin/List/ListSearchBox";
import ListSizeBox from "@/components/DotsAdmin/List/ListSizeBox";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface Props {
    page : any,
    size : number,
    keyword : string,
    column : string
    order : string
}
export default function AdminAccountListPage ({
    page, size , keyword , column , order
} : Props) {
    const router = useRouter()
    // const query = useSearchParams()
    const [data , setData] = useState<any>([])
    const [totalCount , setTotalCount] = useState<number>(0)

    async function getList () {
        try{
            const response = await api.get(`/admin/manager/getManagerList.php?page=${page}&size=${size}&keyword=${keyword}&sortColumn=${column}&sortOrder=${order}`)
            if(response?.data?.Result === true) {
                setData(response?.data?.List); setTotalCount(response?.data?.totalCnt)
            }else{alert(response?.data?.resultMsg);}
        }catch{alert('Server Error')}
    }
    async function statusChange (id : number , status : string){
        try{
            const formData : number | string | any = new FormData()
            formData.append('ID', id)
            formData.append('activeStatus', status === 'Y' ? 'N' : 'Y')
            const response = await api.post(`/admin/manager/updManagerActiveStatus.php`, formData)
            if(response?.data?.result === true) getList()
            else alert(response?.data?.resultMsg)
        }catch{alert('Server Error')}
    }
    useEffect(()=>{
        getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, size, keyword, column, order])
    return(
        <>
        <div className="contentBox manager_management">
            <h3>Admin Account</h3>
            <div className="flexBox">
                <div>
                    <h4>관리자 리스트</h4>
                </div>
            </div>
            <div className="toolBox">
                <div className="left">
                    <div className="selectBox">
                        <ListSizeBox
                            size={size}
                        />
                    </div>
                    <ListSearchBox
                        keyword={keyword}
                    />
                </div>

                <div className="right">
                    <div className="btnBox">
                        <button className="blueBtn" onClick={()=>router.push(`/dotsAdmin/admin-account-management/admin-account`)}>신규등록</button>
                    </div>
                </div>
            </div>

            <div className="tableWrap">
                <div className="tableType_a hover">
                    <table>
                        <ListFilter

                        />
                        <tbody>
                            {data?.map((list:any) => (
                            <tr key={list?.ID}>
                                <td>
                                    <span className="readOnly">{1}</span>
                                </td>
                                <td>
                                    <span className="readOnly">{list?.managerName}</span>
                                </td>
                                <td>
                                    <span className="readOnly">{list?.managerDept}</span>
                                </td>
                                <td>
                                    {list?.managerLogin}
                                </td>
                                <td>
                                    {list?.managerMobile}
                                </td>
                                <td>
                                    {list?.managerPhone}
                                </td>
                                <td>
                                    <div className="toggleSwitchBox">
                                        <span className="toggleSwitch">
                                            <input
                                            type="checkbox"
                                            id={`admin_${list?.ID}`}
                                            className="toggleIpt"
                                            checked={list?.activeStatus === 'Y'}
                                            onChange={()=>statusChange(list?.ID, list?.activeStatus)}
                                            hidden
                                            />
                                            <label htmlFor={`admin_${list?.ID}`} className="toggleSwitch">
                                                <span className="toggleButton"></span>
                                            </label>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="management_btnBox">
                                        <button className="edit" onClick={()=>router.push(`/dotsAdmin/admin-account-management/admin-account?id=${list?.ID}`)}>수정</button>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagerBox">
                <Paginate
                    page={page}
                    size={size}
                    totalCount={totalCount}
                />
            </div>
        </div>
        </>
    )
}
