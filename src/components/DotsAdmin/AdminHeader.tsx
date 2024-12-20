'use client'

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import Cookies from 'js-cookie';
export default function AdminHeader () {
    const router = useRouter()
    const adminInfo = useAppSelector((state) => state.userData.users.users)
    function Logout () {
        router.push('/dotsAdmin')
        Cookies.remove('hessid')
    }
    return(
        <>
            <div className="dotsHeader">
                <div className="header">
                    <div>
                        <div>
                            <div>
                                <span>관리자 : {adminInfo?.managerName}</span>
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>
                        </div>
                        <div>
                            <button onClick={Logout}>로그아웃</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
