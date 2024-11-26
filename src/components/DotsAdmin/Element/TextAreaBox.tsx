'use client'
interface Props {
    title : string
    name : string
    value : string
    description : string
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setData : Function
}
export default function TextAreaBox ({
    title , name , value , setData, description
} : Props) {
    function handleChange (e:React.ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = e.target;
        setData((prev:any) => ({...prev, [name] : value}))
    }
    return(
        <>
        <tr>
            <th>{title} <span className="star">*</span></th>
            <td>
                <textarea value={value} name={name} onChange={handleChange} id=""></textarea>
                <p className="infoTxt"> {description}</p>
            </td>
        </tr>
        </>
    )
}
