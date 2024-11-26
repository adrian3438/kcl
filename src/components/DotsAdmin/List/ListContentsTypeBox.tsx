import api from "@/lib/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
interface Props {
    contentsTypeId : any
}
export default function ListContentsTypeBox ({contentsTypeId} : Props) {
    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()

    const [contentsType , setContentsType] = useState<any>([])

    function Change (e:React.ChangeEvent<HTMLSelectElement>) {
        // console.log(e.target.value)
        const newParams = new URLSearchParams(query.toString())
        newParams.set('contentsType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }

    useEffect(() => {
        async function fetchTypeList () {
            const res1 = await api.get(`/admin/code/getContentsTypeList.php`);
            if(res1?.data?.result === true) {setContentsType(res1?.data?.List)}
        }
        fetchTypeList()
    }, [])

    return(
        <>
            <div className="selectBox">
                <select onChange={(e)=>Change(e)} value={contentsTypeId} name="" id="">
                    <option value="0">전체 컨텐츠</option>
                    {contentsType?.map((list:any, index:number)=>(
                        <option key={index} value={list?.codeId}>{list?.codeName}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
