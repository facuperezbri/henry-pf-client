import { useToken } from "../hooks/useToken"
import { API_URL } from "./API"
export const ACEPT_USER = async (id) => {
    const { token } = useToken()
    try {
        const res = await fetch(`${API_URL}/api/user/acept`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({id})
        })
        const resJson = await res.json()
        return resJson
    } catch (error) {
        console.error(error)
    }
}