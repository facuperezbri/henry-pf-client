import React, { useState } from 'react'
import { useToken } from "../../hooks/useToken"

import { API_URL } from "../../services/API"
    
const SEARCH_USER = async (username) => {
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
const BAN_USER = async (id, isBan) => {
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
const BanSection = () => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')

    const handlerChange = (e) => {
        setUsername(e.target.value)
    }
    const onSearch = () => {
        setUsername([])
        SEARCH_USER(username).then(setUsers).catch(console.error)
    }
    const HandlerBlock = (user) => {
        if (window.confirm(`${ user.isBan ? 'Unlock' : 'Block'} user ${user.username}?`)) {
            BAN_USER(user.id, !user.isBan).then((res) => {

                const newList = users.map(user => {
                    if (user.id === res.id) {
                        return res
                    }
                    return user
                })
                setUsers(newList)
            }).catch(console.error)
        }
    }
  return (
    <div>
        <label>
            <span>Search user</span>
            <input type="text" name="username" onChange={(e) => handlerChange(e)} />
        </label>
        <button onClick={onSearch}>Search</button>
        <div>
            {
                users?.map(user => (
                    <div id={user.id}>
                        <img src={user?.profilepic} alt={user.username} />
                        <span>
                            {user.email}
                        </span>
                        <span>
                            {user.name}
                        </span>
                        <span>
                            {user.lastname}
                        </span>
                        <span>
                            {user.dni}
                        </span>

                        <button onClick={() => HandlerBlock(user) }>
                            {
                                user.isBan ? 'Unlock user': 'block user'
                            }
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BanSection