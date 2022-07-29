import { API_URL } from "./API"
export const GET_USER_DATA = async (token) => {
  try {
    const res = await fetch(`${API_URL}/api/user`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    if(res.status === 401) {
      return {error: res.status}
    }
    const data = res.json()
    return data

  } catch (error) {
    console.log(error)
  }

}