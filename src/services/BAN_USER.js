import { useToken } from "../hooks/useToken"

import { API_URL } from "./API"

export const BAN_USER = async (id, isBan) => {
    const { token } = useToken()

    try {
        const res = await fetch(`${API_URL}/api/user/ban`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({id, isBan})
        })
        if (res.status === 200) {
            const users = await res.json()
            return users
        }
    } catch (error) {
        console.error(error)
    }
}