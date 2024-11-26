import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    inquiryType : string
}
export default function ListInquiryTypeBox ({inquiryType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('inquiryType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={inquiryType} name="" id="" onChange={search}>
                <option value="ALL" selected>전체</option>
                <option value="GE" selected>그린에너지</option>
                <option value="PS" selected>플랜트솔루션</option>
                <option value="MM" selected>계측기</option>
                <option value="MS" selected>마린솔루션</option>
            </select>
        </div>
        </>
    )
}
