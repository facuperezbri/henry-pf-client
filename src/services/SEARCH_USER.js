import { API_URL } from "./API"
import { useToken } from "../hooks/useToken"

export const SEARCH_USER = async (username) => {
    const { token } = useToken()

    try {
        const res = await fetch(`${API_URL}/api/user/search`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({username})
        })
        if (res.status === 200) {
            const users = await res.json()
            return users
        }
    } catch (error) {
        console.error(error)
    }
}