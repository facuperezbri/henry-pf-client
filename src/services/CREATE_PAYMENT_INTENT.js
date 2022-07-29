import { API_URL } from "./API"
import { useToken } from "../hooks/useToken"

export const CREATE_PAYMENT_INTENT = async (amount) => {
    const { token } = useToken()
    try {
        const res = await fetch(`${API_URL}/api/movement/create_payment_intent`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ amount }),
        })
        const resJson = await res.json()
        return resJson
    } catch (error) {
        throw new Error(error)
    }
}