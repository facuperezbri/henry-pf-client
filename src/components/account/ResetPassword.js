import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


const ResetPassword = () => {
    const [password, setPassword] = useState('')
     const navigate = useNavigate()
     const email = useParams()
     const resetPws = async () => {
          await axios.put('http://localhost:4000/api/user/reset-password', {
              email: email.id, 
              password: password
         }).then(() => alert('Reset password sucessfully')).then(setTimeout(() => { navigate('/')}, 2000))
     }
     
    
   
  return (
    <div><h1>Reset Password</h1><div><input type='text' placeholder='New Password' onChange={(e)=> setPassword(e.target.value)}/><input type='text' placeholder='repeat new Password'/></div><button onClick={resetPws}>Change</button></div>
  )
}

export default ResetPassword