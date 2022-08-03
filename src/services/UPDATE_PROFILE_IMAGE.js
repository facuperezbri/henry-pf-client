import { API_URL } from "./API"
import { useToken } from "../hooks/useToken"

export const UPDATE_PROFILE_IMAGE = async (file, profilepicID) => {
    const { token } = useToken()
    try {
        const data = new FormData()
        data.append("newProfilepic", file)
        data.append('profilepicID', profilepicID)
        const res = await fetch(`${API_URL}/api/user/updateProfilepic`, {
            headers: {
                authorization: `Bearer ${token}`
            },
            method: 'PUT',
            body: data
        })
        const resJson = await res.json()
        return resJson
    } catch (error) {
        console.error(error)
    }
}