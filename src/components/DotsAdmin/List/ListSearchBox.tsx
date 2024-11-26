'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface Props {
    keyword?:string
}
export default function ListSearchBox ({
    keyword
} : Props) {
    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        if(e.key === 'Enter'){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('keyword', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
        }
    }
    return(
        <>
        <div className="searchBox">
            <div>
                <input type="text" defaultValue={keyword} onKeyDown={search} placeholder="검색어를 입력해 주세요."/>
                <span></span>
            </div>
        </div>
        </>
    )
}