'use client'

import {NextPage} from "next";
import {useRouter} from "next/navigation";
import {useSearchParams} from 'next/navigation';

const Page: NextPage = () => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const isSuccess = searchParams.get('success')
    const isFailure = searchParams.get('cancel')

    const handleCheckout = async () => {
        const response = await fetch('https://stripe-poc-gustavohekel.vercel.app/api/checkout', {
            method: 'post'
        })
        const stripeResponse = await response.json()

        router.push(stripeResponse.url)
    }

    if (isSuccess) {
        return <>Success!</>
    }

    if (isFailure) {
        return <>Failed!</>
    }

    return (
        <button onClick={handleCheckout}>Checkout!</button>
    )

}

export default Page