import { useToken } from "../hooks/useToken"
import { API_URL } from "./API"
export const CHARGE_ACCOUNT = async ({ cvu, chargeMethod, amount }) => {
    const { token } = useToken()

    try {
        const res = await fetch(`${API_URL}/api/movement/charge`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ cvu, chargeMethod, amount })
        })
        const resJson = await res.json()

        return resJson
    } catch (error) {
        console.error(error)
    }
}