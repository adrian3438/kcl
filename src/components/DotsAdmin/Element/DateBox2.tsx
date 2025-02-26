'use client'

interface Props {
    data: any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onChange : Function
}

export default function AdminDateBox2 ({data, onChange}: Props) {
    return(
        <>
            <tr>
                <th>등록일자 <span className="star">*</span></th>
                <td>
                    <div className="dateBox">
                        <input type="date" name="inputDate" id="inputDate" value={data?.inputDate} onChange={(e)=>onChange(e)} />
                    </div>
                </td>
            </tr>
        </>
    )
}
