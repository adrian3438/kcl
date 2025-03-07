'use client';

import '@/assets/contact.scss';
import api from "@/lib/api";
import {useRouter} from "next/navigation";
import {useState} from "react";

interface Props {
    language?: any
}

export default function Contact({language}: Props) {
    const router = useRouter()
    const [data, setData] = useState<any>({
        company: '',
        name: '',
        position: '',
        phone: '',
        email: '',
        type: '',
        title: '',
        message: '',
        attachedFile: null,
        agreeTerms: "N",
        adAgree: "N"
    })
    const [isCheck, setCheck] = useState<boolean>(false)
    // const [isAdCheck, setAdCheck] = useState<boolean>(false)
    const [fileName, setFileName] = useState<string>('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [preview, setPreview] = useState<any>(null);

    function handleChange(e: any) {
        const {name, type, value, files} = e.target
        if (type === 'file') {
            const reader = new FileReader()
            if (files[0]) {
                reader.readAsDataURL(files[0])
            }
            reader.onload = () => {
                setData((prev: any) => ({...prev, [name]: files[0]}))
                if (name === 'attachedFile') {
                    setFileName(files[0].name)
                } else {
                    setPreview(reader.result)
                }
            }
        } else {
            setData((prev: any) => ({...prev, [name]: value}))
        }
    }

    async function save() {
        if (!data?.company) {
            alert('회사명을 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.name) {
            alert('이름을 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.position) {
            alert('직급을 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.phone) {
            alert('연락처를 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.email) {
            alert('이메일을 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.type) {
            alert('사업분야를 선택해주시기 바랍니다.');
            return;
        }
        if (!data?.title) {
            alert('문의 제목을 입력해주시기 바랍니다.');
            return;
        }
        if (!data?.message) {
            alert('문의 내용을 입력해 주시기 바랍니다.');
            return;
        }
        if (!isCheck) {
            alert('개인정보 수집 및 이용동의를 체크해주시기 바랍니다.');
            return;
        }

        try {
            const formData = new FormData()
            formData.append('companyName', data?.company)
            formData.append('inquiryName', data?.name)
            formData.append('inquiryPosition', data?.position)
            formData.append('inquiryEmail', data?.email)
            formData.append('inquiryPhone', data?.phone)
            formData.append('inquiryType', data?.type)
            formData.append('inquirySubject', data?.title)
            formData.append('inquiryContents', data?.message)
            formData.append('inquiryLang ', language.language === "KR" ? "EN" : "KR");
            if (data?.attachedFile) {
                formData.append('attachedFile', data?.attachedFile)
            }
            formData.append('privacyAgree', isCheck ? 'Y' : 'N');
            formData.append('advertiseAgree' , 'N');
            // formData.append('advertiseAgree', isAdCheck ? 'Y' : 'N');
            const response = await api.post(`/user/inquiry/setInquiry.php`, formData)
            if (response?.data?.result === true) {
                if (language?.language === 'kr') {
                    alert(response?.data?.resultMsg);
                } else {
                    alert(response?.data?.resultMsgEn);
                }
                router.push('/');
            } else {
                alert(response?.data?.resultMsg)
            }
        } catch {
            alert('Server Error')
        }
    }

    return (
        <div className="container">
            <div className="inquiry">
                <div className="content-header">
                    <h2>{language.inquiry_text_01}</h2>
                    <p>{language.inquiry_text_25}</p>
                </div>
                <form method="post">
                    <fieldset className="customer-info">
                        <legend><span>1</span> {language.inquiry_text_02} <i>*</i></legend>
                        <div>
                            <div>
                                <input type="text" id="customerInfo01" placeholder={language.inquiry_text_03} name="company" onChange={handleChange}/>
                            </div>
                            <div>
                                <input type="text" id="customerInfo02" placeholder={language.inquiry_text_04} name="name" onChange={handleChange}/>
                            </div>
                            <div>
                                <input type="text" id="customerInfo03" placeholder={language.inquiry_text_05} name="position" onChange={handleChange}/>
                            </div>
                            <div>
                                <input type="text" id="customerInfo05" placeholder={language.inquiry_text_06} name="email" onChange={handleChange}/>
                            </div>
                            <div>
                                <input type="text" id="customerInfo04" placeholder={language.inquiry_text_07} name="phone" onChange={handleChange}/>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="service-info">
                        <legend><span>2</span> {language.inquiry_text_08} <i>*</i></legend>
                        <div>
                            <label>
                                <input type="radio" id="serviceInfo01" name="type" value="P" onChange={handleChange}/>
                                <span>{language.inquiry_text_09}</span>
                            </label>
                            <label>
                                <input type="radio" id="serviceInfo02" name="type" value="T" onChange={handleChange}/>
                                <span>{language.inquiry_text_10}</span>
                            </label>
                            {/*<label>
                                <input type="radio" id="serviceInfo03" name="type" value="" onChange={handleChange}/>
                                <span>{language.inquiry_text_11}</span>
                            </label>
                            <label>
                                <input type="radio" id="serviceInfo04" name="type" value="" onChange={handleChange}/>
                                <span>{language.inquiry_text_12}</span>
                            </label>*/}
                            <label>
                                <input type="radio" id="serviceInfo05" name="type" value="O" onChange={handleChange}/>
                                <span>{language.inquiry_text_13}</span>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="inquiry-detail">
                        <legend><span>3</span> {language.inquiry_text_14} <i>*</i></legend>
                        <div className="text-box">
                            <input type="text" id="inquiryDetailTitle" placeholder={language.inquiry_text_15} name="title" onChange={handleChange}/>
                            <textarea id="inquiryDetailText" placeholder={language.inquiry_text_16} name="message" onChange={handleChange}></textarea>
                        </div>
                    </fieldset>

                    <fieldset className="inquiry-detail">
                        <legend><span>4</span> {language.inquiry_text_17} <i>*</i></legend>
                        <div className="file-box">
                            <div>
                                <input type="file" id="dk_inquiry_pdsFile" name="attachedFile" onChange={handleChange}/>
                                <label htmlFor="dk_inquiry_pdsFile">{language.inquiry_text_18}</label>
                                <input className="uploadName" type="text" id="contactUs_fileName" value={fileName}/>
                            </div>
                            <p className="warning">
                                {language.inquiry_text_19}
                            </p>
                        </div>
                    </fieldset>
                    <fieldset className="agree">
                        <label>
                            <input type="checkbox" id="agreeConfirm" name="agreeTerms" onChange={() => setCheck(!isCheck)} checked={isCheck}/>
                            {language.inquiry_text_20}
                        </label>
                        <div>
                            {language.inquiry_text_21}<br/>
                            {language.inquiry_text_22}<br/>
                            {language.inquiry_text_23}
                        </div>
                    </fieldset>
                    <div className="submit">
                        <button type="button" id="goSubmit" onClick={save}>{language.inquiry_text_24}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
