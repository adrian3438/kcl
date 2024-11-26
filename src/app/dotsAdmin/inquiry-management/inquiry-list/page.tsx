import InquiryListPage from "@/components/pages/dotsAdmin/inquiry-list";

export default function InquiryList ({searchParams : {inquiryType, replyStatus, page, size, keyword, column, order}} : any) {

    return(
        <>
        <InquiryListPage
            inquiryType={inquiryType || 'ALL'}
            replyStatus={replyStatus || ''}
            page={page || 1}
            size={size || 25}
            keyword={keyword || ''}
            column={column || 'date'}
            order={order || 'desc'}
        />
        </>
    )
}
