'use client'

import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface Props {
    id : any
    lang : string
    contentType : any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setPopup : Function
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    refetch : Function
    status : any
    masterId : any
}
export default function SelectContentsModifyBox ({
    id, lang, contentType, setPopup, refetch, status, masterId
} : Props) {

    const router = useRouter()

    const langWrapRef = useRef<any>(null)

    // 수정 페이지로 이동
    function handleModify () {
        router.push(`/dotsAdmin/contents-management/contents?c=${contentType}&id=${id}&lang=${lang}`)
    }

    // 게시글 삭제
    async function handleDelContents () {
        const confirm = window.confirm('해당 게시글을 삭제하시겠습니까?')
        if(confirm) {
            const formData = new FormData()
            formData.append('ID', id)
            formData.append('masterId', masterId)
            const res = await api.post(`admin/contents/delContent.php`, formData)
            if(res.data.result === true) {
                refetch()
            }else{
                alert(res.data.resultMsg)
            }
        }
    }

    // 게시 또는 보류 상태 변경
    async function handleChangeStatus (type : string) {
        const confirm = window.confirm(type === 'open' ? '해당 게시글을 보류하시겠습니까?' : '해당 게시글을 게시하겠습니까?')
        if(confirm) {
            const formData = new FormData()
            formData.append('ID', id)
            formData.append('publishingStatus', status === 'Y' ? 'N' : 'Y')
            const res = await api.post(`/admin/contents/updContentPublishStatus.php`, formData)
            if(res.data.result === true) {
                setPopup({ id: '', lang: '', contentType : '', status : '' })
                refetch()
            }else{
                alert(res.data.resultMsg)
            }
        }
    }

    useEffect(() => {
        function handleClickOutside(e:any) {
            if (langWrapRef.current && !langWrapRef.current.contains(e.target)) {
                setPopup({ id: '', lang: '', contentType : '' });
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
        <div className="editBox active" ref={langWrapRef}>
            <button onClick={handleModify}>
                <i className="fas fa-edit" aria-hidden="true"></i>
                <span>수정</span>
            </button>
            {status === 'Y' &&
            <button onClick={()=>handleChangeStatus('open')}>
                <i className="fa-duotone fa-file-circle-check" aria-hidden="true" ></i>
                <span>보류</span>
            </button>
            }
            {status === 'N' &&
            <button onClick={()=>handleChangeStatus('close')}>
                <i className="fa-duotone fa-file-circle-check" aria-hidden="true" ></i>
                <span>게시</span>
            </button>
            }
            {/* <button>
                <i className="fa-duotone fa-file-circle-check" aria-hidden="true" ></i>
                <span>보류</span>
            </button> */}
            <button onClick={()=>handleDelContents()}>
                <i className="fas fa-trash-alt" aria-hidden="true"></i>
                <span>삭제</span>
            </button>
        </div>
        </>
    )
}
