import React from 'react'
import axios from 'axios'

const SendMail = () => {
  const senMail = async () => {
    const send = await axios.post('http://localhost:4000/api/user/sendReset') 
}

  return (
    <div><input placeholder="Enter your email for reset"/><button onClick={senMail}></button></div>
  )
}

export default SendMail