'use client'
import ChipInput from 'material-ui-chip-input'
// import { useState } from 'react'
interface Props {
    data : any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setData : Function
}
export default function ChipInputBox ({
    data , setData
} : Props) {
    function handleAddChip (chip : any) {
        if (!chip || chip.length < 2 || data?.searchKeyword.includes(chip)) {
            return;
        }
        const newArr = [...data?.searchKeyword, chip];
        setData((prev:any) => ({...prev, searchKeyword: newArr}))
    }
    function handleDelChip (chips : any, index : number) {
        const newArr = data?.searchKeyword?.filter((x:any, y:any) => y !== index);
        setData((prev:any) => ({...prev, searchKeyword: newArr}))
    }
    return(
        <>
        <ChipInput
            value={data?.searchKeyword}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip,index) => handleDelChip(chip, index)}
            blurBehavior="add"
        />
        </>
    )
}
