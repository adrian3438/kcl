'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface Props {
    replyStatus : string
}
export default function ListInquiryReplyBox ({
    replyStatus
} : Props) {
    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('replyStatus', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={replyStatus} onChange={search} name="" id="">
                <option value="" selected>- 답변상태 -</option>
                <option value="U">답변전</option>
                <option value="R">답변완료</option>
            </select>
        </div>
        </>
    )
}