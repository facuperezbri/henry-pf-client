import {useToken} from '../hooks/useToken'

export const UPDATE_PROFILE_IMG = async (img)=>{
    const {token} = useToken()
    const body = new FormData()
    body.append("image",img)
    try {
        const res = await fetch("http://localhost:4000/api/user/useredit",{
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
