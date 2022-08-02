import { API_URL } from "./API"
import { useToken } from "../hooks/useToken"

export const TRANSFER_MONEY = async ({ amount, cvuMain, currency, operation, comment, cvuD, category}) => {
    const { token } = useToken()
    try {
        const res = await fetch(`${API_URL}/api/movement/make_a_movement`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ amount, cvuMain, currency, operation, comment, cvuD, category })
        })
        if (res.status === 200) {   
            const resJson = await res.json()
            return resJson
        }
    } catch (error) {
        console.error(error)
    }
}