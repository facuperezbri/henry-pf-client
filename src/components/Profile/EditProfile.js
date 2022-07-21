import React from 'react'
import {useSelector} from 'react-redux'
export default function EditProfile() {
    const data = useSelector((state)=>state.dataProfile)
  return (
    <div>
        <div>
            <h2>{}</h2>
        </div>
    </div>
  )
}
