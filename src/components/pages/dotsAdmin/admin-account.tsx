'use client'
import React from "react"
import TextBox from "@/components/DotsAdmin/Element/TextBox"
import api from "@/lib/api"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
interface Props {
    id : any
}
export default function AdminAccountPage ({
    id
} : Props) {
    const router = useRouter()

    const [data, setData] = useState<any>({
        id : '', pass : '', name : '', phone : '',
        mobile : '', email  : '', dept : ''
    })
    // async function detail () {
    //     try{
    //         const response = await api.get(`/admin/manager/getManagerDetail.php?ID=${id}`)
    //         if(response?.data?.result === true) {
    //             if(response?.data?.List?.length > 0){
    //                 const data = response?.data?.List[0];
    //                 setData((prev:any) => ({...prev, id : data?.managerLogin, name : data?.managerName, phone : data?.managerPhone,
    //                     mobile : data?.managerMobile, email : data?.managerEmail, dept : data?.managerDept
    //                 }))
    //             }
    //         }else{alert(response?.data?.resultMsg);}
    //     }catch{alert('Server Error')}
    // }
    async function save () {
        try {
            if(!id && Object.values(data).some(value => value === '')){
                alert('필수항목을 모두 입력해 주시기 바랍니다.'); return;
            }
            if(id && Object.entries(data).filter(([key]) => key !== 'pass').some(([, value]) => value === '')){
                alert('필수항목을 모두 입력해주시기 바랍니다.');
                return;
            }
            const formData = new FormData()
            formData.append('managerLogin', data?.id)
            if(data?.pass) {formData.append('managerPass', data?.pass)}
            formData.append('managerName', data?.name)
            formData.append('managerPhone', data?.phone)
            formData.append('managerMobile', data?.mobile)
            formData.append('managerEmail', data?.email)
            formData.append('managerDept', data?.dept)
            if(id){
                const response = await api.post(`/admin/manager/updManager.php`, formData)
                if(response?.data?.result === true) {
                    alert(response?.data?.resultMsg);
                    router.back()
                }
                else{alert(response?.data?.resultMsg);}
            }else{
                const response = await api.post(`/admin/manager/setManager.php`, formData)
                if(response?.data?.result === true) {
                    alert(response?.data?.resultMsg);
                    router.push(`/dotsAdmin/admin-account-management/admin-account-list`)
                }
                else{alert(response?.data?.resultMsg);}
            }


        }catch{
            alert('Server Error')
        }
    }
    useEffect(()=>{
        async function fetchDetail (){
            if(id){
                try{
                    const response = await api.get(`/admin/manager/getManagerDetail.php?ID=${id}`)
                    if(response?.data?.result === true) {
                        if(response?.data?.List?.length > 0){
                            const data = response?.data?.List[0];
                            setData((prev:any) => ({...prev, id : data?.managerLogin, name : data?.managerName, phone : data?.managerPhone,
                                mobile : data?.managerMobile, email : data?.managerEmail, dept : data?.managerDept
                            }))
                        }
                    }else{alert(response?.data?.resultMsg);}
                }catch{alert('Server Error')}
            }
        }
        fetchDetail()
    }, [id])
    return (
        <>
        <div className="contentBox add">
            <h3>Admin Account</h3>
            <div className="flexBox">
                <div>
                    <h4>관리자 계정</h4>
                </div>
                <div className="btnBox">
                    <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                    <button className="blueBtn" onClick={()=>save()}>저장하기</button>
                </div>
            </div>

            <div className="input_tableWrap">
                <table>
                    <tbody>
                        <TextBox
                            title={'아이디'}
                            name={'id'}
                            value={data?.id}
                            setData={setData}
                        />
                        <TextBox
                            title={'비밀번호'}
                            name={'pass'}
                            value={data?.pass}
                            setData={setData}
                        />
                        <TextBox
                            title={'이름'}
                            name={'name'}
                            value={data?.name}
                            setData={setData}
                        />
                        <TextBox
                            title={'연락처'}
                            name={'phone'}
                            value={data?.phone}
                            setData={setData}
                        />
                        <TextBox
                            title={'휴대전화'}
                            name={'mobile'}
                            value={data?.mobile}
                            setData={setData}
                        />
                        <TextBox
                            title={'이메일'}
                            name={'email'}
                            value={data?.email}
                            setData={setData}
                        />
                        <TextBox
                            title={'부서'}
                            name={'dept'}
                            value={data?.dept}
                            setData={setData}
                        />
                    </tbody>
                </table>
            </div>

        </div>
        </>
    )
}
