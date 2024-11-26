import InquiryPage from "@/components/pages/dotsAdmin/Inquiry";

export default function Inquiry ({searchParams : {id}} : any) {

    return(
        <>
        <InquiryPage
            id={id}
        />
        </>
    )
}