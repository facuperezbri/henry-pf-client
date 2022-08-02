import {useToken} from '../hooks/useToken'
import { API_URL } from "./API"


export const UPDATE_PROFILE_IMG = async (img)=>{
    const {token} = useToken()
    const body = new FormData()
    body.append("image",img)
    try {
        const res = await fetch(`${API_URL}/api/user/useredit`,{
            headers:{ 
                authorization: `Bearer ${token}`,
            },
            body,
            method:"PUT"
        }) 
        const rss = await res.json()
        return rss
    } catch (error) {
        console.log(error)
    }
}
