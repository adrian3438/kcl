import ContentsPage from "@/components/pages/dotsAdmin/contents";
// import Head from "next/head";

export default function Contents ({searchParams : {id, lang}} : any) {

    return(
        <>
        <ContentsPage
            id={id}
            lang={lang}
        />
        </>
    )
}
