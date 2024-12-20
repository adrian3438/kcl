'use client'

import Providers from "../redux/provider"

export default function ProviderContainer ({children} : any) {

    return(
        <>
        <Providers>{children}</Providers>
        </>
    )
}