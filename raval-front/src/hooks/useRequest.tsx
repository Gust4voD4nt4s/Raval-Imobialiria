import axios from "axios"
import { useEffect, useState } from "react"


export const useFetch = <T = unknown>(url: string, param?: object): T | null => {

    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        axios.get(url, {
            params: {
                ...param
            }
        })
            .then(response => {
                setData(response.data)
            })
    }, [url, param])

    return data
}