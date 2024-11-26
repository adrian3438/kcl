'use client'
import { useEffect, useRef } from "react"
// import $ from 'jquery';

interface Props {
    initData : any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setData : Function,
    name : any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onChange? : Function
}
export default function Summernote ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initData, setData, name, onChange
} : Props) {
    const summernoteRef = useRef<any>(null);
    useEffect(()=>{
        const config: Summernote.Options = {

            tabDisable: true, // 키보드 Tab키를 사용가능할게 할지(Default false)
            height : 300,
            toolbar: [
            // 작성해준 순서대로 toolbar에 삽입된다.
            // 중복으도 선언가능하며, toolbar삽입 위치를 자유롭게하기 위해서 중복으로 타입이 되어있어 보인다.
                ['style', ['style']],
                ["font", ["bold", "italic", "underline", "superscript"]],
                ["fontsize", ["fontsize", "fontname", "color"]],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview']],
            ],
            // 사용하고 싶은 fontSize들만 정의
            fontSizes: ["10", "12", "14", "16"],
            // 사용하고 싶은 Color들 정의, [[[]]] 이란걸 주의하자!, 최종안에 배열의 색상값이 한줄에 표시된다.
            // 아래처럼 선언할시 첫번째줄 red 하나, 두번째줄 black하나, 세번째줄 yellow 하나 이렇게 나타난다.
            colors: [[["red"]], [["black"]], [["yellow"]]],
            // fontSize단위
            fontSizeUnits: ["px"],
            // tooltip에 언어를 설정하는것같은데, 사용을 원할 경우 언어 summernote-ko.js파일도 추가가 필요 해보인다.
            lang: "ko-KR",

            callbacks: {
                onInit: () => {
                    // if(initData)
                    // $('#summernote').summernote('code', initData);
                    $(summernoteRef.current).summernote('code', initData);
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onChange: (contents: string, $editable: JQuery) => {
                    setData((prev:any) => ({...prev, [name] : contents}))
                },
                onImageUpload : async (files:any) => {
                    for (const file of files) {
                        const formData = new FormData()
                        formData.append('file', file)
                        // const res = await axios.post('/admin/setToastFileUpload.php', formData)
                        // if(res) {
                        //     $('#summernote').summernote('insertImage', res.data.imageUrl)
                        // }
                    }
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onKeyup: (ev: KeyboardEvent) => {
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onKeydown: (ev: KeyboardEvent) => {
                },
                onPaste: (e: Event & { originalEvent: ClipboardEvent }) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const clipboardData = e.originalEvent.clipboardData?.getData("text");
                },
            },
        };
        $(summernoteRef.current).summernote(config);

        // return () => {
        //     $(summernoteRef.current).summernote('destroy');
        // };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initData, setData])

    return(
        <>
        <textarea ref={summernoteRef} id="summernote"></textarea>
        </>
    )
}
