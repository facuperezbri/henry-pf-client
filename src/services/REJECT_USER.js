import { useToken } from "../hooks/useToken"
import { API_URL } from "./API"
export const REJECT_USER = async (id) => {
    const { token } = useToken()
    try {
        const res = await fetch(`${API_URL}/api/user/reject`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify({id})
        })
        const resJson = await res.json()
        return resJson
    } catch (error) {
        console.error(error)
    }
}