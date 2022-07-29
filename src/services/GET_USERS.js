import { useToken } from "../hooks/useToken"
import { API_URL } from "./API"
export const GET_USERS = async () => {
    const { token } = useToken()
    try {
        const data = await fetch(`${API_URL}/api/user/newUsers`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        const users = await data.json()
        console.log({users})
        return users
    } catch (error) {
        console.error(error)
    }
}