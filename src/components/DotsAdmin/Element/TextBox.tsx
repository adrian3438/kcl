'use client'
interface Props {
    title?: string // 타이틀
    name?: string // 이름
    value?: string // 값
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setData: Function // Change
}
export default function TextBox ({
    title , name , value , setData
} : Props) {
    function handleChange (e:React.ChangeEvent<HTMLInputElement>){
        const {name , value} = e.target;
        setData((prev : any) => ({...prev , [name] : value}))
    }
    return(
        <>
        <tr>
            <th>{title} <span className="star">*</span></th>
            <td>
                <div className="inputBox">
                    <input
                        type={name === 'pass' ? 'password' : 'text'}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={`${title}(을)를 입력해주세요.`}
                    />
                </div>
            </td>
        </tr>
        </>
    )
}
