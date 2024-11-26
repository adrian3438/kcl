'use client'

interface Props {
    title : string
    name : string
    imgUrl : string
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setData : Function
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setPreview : Function
}
export default function ImageUploadBox ({
    title , name , imgUrl , setData , setPreview
} : Props) {
    function handleChange (e:any){
        const {name , files} = e.target;
        const reader = new FileReader()
        if(files[0]) {reader.readAsDataURL(files[0])}
        reader.onload = () => {
            setData((prev:any) => ({...prev, [name] : files[0]}))
            setPreview((prev:any) => ({...prev, [name] : reader.result}))
        }
    }
    return(
        <>
        <tr className="top">
            <th>{title} <span className="star">*</span></th>
            <td>
                {imgUrl ?
                    <div className="imgUploadBox imgUploadBox_after">
                        <img src={imgUrl} alt="thumbnail img" />
                        <input type="file" name={name} onChange={handleChange} id={`${name}_1`}/>
                        <label htmlFor={`${name}_1`} className="imgUploadBtn imgUploadBtn_after">
                            <i className="fa-light fa-upload"></i>
                            이미지 편집
                        </label>
                    </div>
                    :
                    <div className="imgUploadBox imgUploadBox_before">
                        <input type="file" name={name} onChange={handleChange} id={`${name}_2`}/>
                        <label htmlFor={`${name}_2`} className="imgUploadBtn imgUploadBtn_before">
                            <i className="fa-light fa-upload"></i>
                            이미지 업로드
                        </label>
                    </div>
                }
            </td>
        </tr>
        </>
    )
}
