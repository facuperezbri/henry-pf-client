import React,{useState} from 'react'

export default function Alert() {
    const[deniedOrAccess,setDeniedOrAccess] = useState(false)
  return (
    <div>
       {deniedOrAccess ? 
        <h1>password entered successfully</h1>
        :
        <h1>Your password could not be verified, please try again</h1>}
    </div>
  )
}
