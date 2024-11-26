'use client'

import api from "@/lib/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
interface Props {
    businessTypeId : any
}
export default function ListBusinessTypeBox ({businessTypeId} : Props) {
    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()

    const [businessType, setbusinessType] = useState<any>([])

    function Change (e:React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value)
        const newParams = new URLSearchParams(query.toString())
        newParams.set('businessType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }


    useEffect(() => {
        async function fetchTypeList () {
            const res2 = await api.get(`/admin/code/getBusinessDivisionTypeList.php`);
            if(res2?.data?.result === true) {setbusinessType(res2?.data?.List)}
        }
        fetchTypeList()
    }, [])
    return(
        <>
        <div className="selectBox">
            <select onChange={(e)=>Change(e)} value={businessTypeId} name="" id="">
                <option value="0">전체 사업영역</option>
                {businessType?.map((list:any, index:number)=>(
                    <option key={index} value={list?.codeId}>{list?.codeName}</option>
                ))}
            </select>
        </div>
        </>
    )
}
