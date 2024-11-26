'use client'

interface Props {
    data: any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onChange : Function
}

export default function AdminDateBox ({data, onChange}: Props) {
    return(
        <>
            <tr>
                <th>보도일자 <span className="star">*</span></th>
                <td>
                    <div className="dateBox">
                        <input type="date" name="date" id="date" value={data?.date} onChange={(e)=>onChange(e)} />
                    </div>
                </td>
            </tr>
        </>
    )
}
