import CommonCodeViewPage from "@/components/pages/dotsAdmin/common-code";

export default function CommonCode ({searchParams : {id}} : any) {

    return(
        <>
        <CommonCodeViewPage id={id}/>
        </>
    )
}