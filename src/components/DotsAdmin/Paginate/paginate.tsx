'use client'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
interface Props {
    page : any
    totalCount : number
    size : number
}
export default function Paginate ({

    page, size, totalCount

}: Props) {
    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function handleChange (e:React.ChangeEvent<unknown>, pageNumber : number){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('page', pageNumber)
        router.push(`${path}?${newParams?.toString()}`)
    }

    return(
        <>
        <Stack spacing={2}>
            <Pagination
                page={parseInt(page)}
                count={Math.ceil(totalCount/size)}
                shape="rounded"
                onChange={handleChange}
                boundaryCount={1}
                showFirstButton
                showLastButton
                className="pagination"
            />
        </Stack>
        </>
    )
}
