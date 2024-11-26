import AdminAccountPage from "@/components/pages/dotsAdmin/admin-account";
// import { Suspense } from "react";

export default function AdminAccount ({searchParams : {id}} : any) {

    return(
        <>
            <AdminAccountPage
                id={id}
            />
        </>
    )
}
