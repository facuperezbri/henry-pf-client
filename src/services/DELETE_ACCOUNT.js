import { API_URL } from "./API"
import { useToken } from "../hooks/useToken";


export const DELETE_ACCOUNT = async () => {
    const { token } = useToken()
    try {
      const res = await  fetch(`${API_URL}/api/user/removeAccount`, {
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })
    const resJson = res.json()
    return resJson
    } catch (error) {
      console.error(error)
    }
  }