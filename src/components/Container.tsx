'use client'

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import AdminSideBar from "./DotsAdmin/SideBar"
import AdminHeader from "./DotsAdmin/AdminHeader"
import api from "@/lib/api"
import { setUser } from "@/store/Slices/adminInfoSlice"
import {useAppDispatch} from "@/store/hooks";

export default function Container ({children} : any) {
    const router = useRouter()
    const pathname = usePathname()
    const splitPath = pathname.split('/')
    const dispatch = useAppDispatch()
    const [cookie, setCookie] = useCookies(['LANG', 'hessid']);
    async function getAdminInfo () {
        const formData : any = new FormData()
        formData.append('managerUuid' , cookie.hessid || '')
        const response = await api.post(`/admin/manager/getManagerInfo.php` , formData)
        if(response?.data?.result === true) {
            if(response?.data?.list?.length > 0) {
                dispatch(setUser({users : response?.data?.list[0]}))
            }
            if(splitPath[1] === 'dotsAdmin' && !splitPath[2]) {
                router.push(`/dotsAdmin/common-code-management/common-code-list`)
            }
        }else{
            if(splitPath[1] === 'dotsAdmin' && splitPath[2]){
                alert('로그인이 필요합니다.'); router.push('/dotsAdmin')
            }
        }
    }
    useEffect(() => {
        if(splitPath[1] === 'dotsAdmin'){
            getAdminInfo()
        }
    } , [splitPath])
    useEffect(() => {
        if(cookie.LANG === undefined){
            setCookie('LANG', 'kr', {path : '/'})
        }
    }, [cookie?.LANG, setCookie, pathname])
    return(
        <>
            {splitPath[1] === 'dotsAdmin' ?
                <div className="admin_wrap">
                    {splitPath[2] ? <AdminHeader/> : ''}
                    {splitPath[2] ? <AdminSideBar/> : ''}

                    <div className="dotsContentWrap">

                        {children}

                    </div>
                </div>

                :
                <>
                    {children}
                </>
            }
        </>
    )
}
