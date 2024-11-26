'use client'
import { usePathname } from "next/navigation"
import AdminSideBar from "./DotsAdmin/SideBar"
import Providers from "@/redux/provider"

export default function Container ({children} : any) {
    const pathname = usePathname()
    const splitPath = pathname.split('/')

    return(
        <>
        <Providers>
            <div className="admin_wrap">

                {splitPath[2] ? <AdminSideBar/> : ''}

                <div className="dotsContentWrap">
                    {children}
                </div>

            </div>
        </Providers>
        </>
    )
}
