import { useToken } from "../hooks/useToken"
import { API_URL } from "./API"

export const ADD_FAVORITE = async (username) => {
    const { token } = useToken()
    try {
        const res = await  fetch(`${API_URL}/api/favourites/addFavorite`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ username })
        })
        const resJson = await res.json()
        console.log({resJson})
        return resJson
    } catch (error) {
        console.error(error)
    }
}