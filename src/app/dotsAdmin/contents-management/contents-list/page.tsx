import ContentsListPage from "@/components/pages/dotsAdmin/contents-list";

export default function ContentsList ({searchParams : {
    contentsType, businessType, page, size, keyword, column, order
}} : any) {

    return(
        <>
        <ContentsListPage
            contentsType={contentsType || 0}
            businessType={businessType || 0}
            page={page || 1}
            size={size || 25}
            keyword={keyword || ''}
            column={column || 'contentMdate'}
            order={order || 'desc'}
        />
        </>
    )
}
