import { API_URL } from "./API"
import { useToken } from "../hooks/useToken"

export const CANCEL_PAYMENT_INTENT = async (paymentIntentID) => {
    const { token } = useToken()

    try {
        const res = await fetch(`${API_URL}/api/movement/cancel_payment_intent`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ paymentIntentID })
        })
        const resJson = await res.json()
        return resJson
    } catch (error) {
        throw new Error(error)
    }
}