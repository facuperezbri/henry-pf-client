import {useState} from 'react'
import axios from 'axios'
import styles from './SendMail.module.css'
import InputComponent from './../uiComponents/InputComponent'


const SendMail = () => {
  const [email, setEmail] = useState()

  const send = async () => {
    const mail = await axios.post('http://localhost:4000/api/user/sendReset', {
      email
     })
     const emaildata = mail.data
     console.log(emaildata)  
  }

  const handleOnChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  return (
    <div className={styles.container}><InputComponent placeholder="Enter your email for reset" name={'Reset'}onChange={(e) => handleOnChange(e)} /><button onClick={send} className={styles.btn}>Send</button></div>
  )
}

export default SendMail