'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ListFilter () {
    // const router = useRouter()
    const pathname = usePathname()
    const [filter , setFilter] = useState<any[]>([])
    useEffect(()=>{
        switch(pathname){
            case '/dotsAdmin/common-code-management/common-code-list' : setFilter(CommonCodeFilter); break;
            case '/dotsAdmin/contents-management/contents-list' : setFilter(ContentFilter); break;
            case '/dotsAdmin/inquiry-management/inquiry-list' : setFilter(InquiryFilter); break;
            case '/dotsAdmin/admin-account-management/admin-account-list' : setFilter(SettingFilter); break;
        }
    }, [pathname])
    return(
        <>
        <thead>
            <tr>
                <th>No.</th>
                {filter?.map((filter : any, index:number) => {
                    const isSort = filter?.column ? true : false;
                    // const isColumn = column === filter?.column;
                    return(
                    <th key={index}>
                        <span className="sortWrap">
                            {filter.title}

                            {isSort?

                            <span
                                className={'sort'}
                            >

                            </span>

                            :

                            <span className=""></span>

                            }
                        </span>
                    </th>
                    )
                })}
            </tr>
        </thead>
        </>
    )
}

export const CommonCodeFilter = [
    {title : '공용코드명', column : ''},
    {title : '코드 ID', column : ''},
    {title : '등록일자', column : ''},
    {title : '공개/비공개', column : ''},
]

export const ContentFilter = [
    {title : '컨텐츠 유형', column : ''},
    {title : '이미지', column : ''},
    {title : '제목', column : ''},
    {title : '언어별', column : ''},
    {title : '공개/비공개', column : ''},
    {title : '날짜', column : ''},
]

export const InquiryFilter = [
    {title : '문의 유형', column : ''},
    {title : '회사명', column : ''},
    {title : '이름', column : ''},
    {title : '직급', column : ''},
    {title : '이메일', column : ''},
    {title : '연락처', column : ''},
    {title : '문의내용', column : ''},
    // {title : '문의내용', column : ''},
    {title : '문의날짜', column : ''},
    {title : '답변상태', column : ''},
]

export const SettingFilter = [
    {title : '이름', column : ''},
    {title : '부서', column : ''},
    {title : '아이디', column : ''},
    {title : '휴대폰', column : ''},
    {title : '전화번호', column : ''},
    {title : '직원여부', column : ''},
    {title : '관리', column : ''},
    // {title : '', column : ''},
]
