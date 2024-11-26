import AdminAccountListPage from "@/components/pages/dotsAdmin/admin-account-list";

export default function AdminAccountList ({searchParams : {
    page, size, keyword, column, order
}} : any) {

    return(
        <>
        <AdminAccountListPage
            page={page || 1}
            size={size || 25}
            keyword={keyword || ''}
            column={column || 'managerName'}
            order={order || 'asc'}
        />
        </>
    )
}