import React from 'react'
import axios from 'axios'

const SendMail = () => {

  const send = async () => {
    const mail = await axios.post('http://localhost:4000/api/user/sendReset') 
}

  return (
    <div><input placeholder="Enter your email for reset"/><button onClick={send}></button></div>
  )
}

export default SendMail