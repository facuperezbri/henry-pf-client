import React,{useState} from 'react'
import style from './EditUser.module.css'
import axios from "axios"
import { useToken } from '../../hooks/useToken'

const validate = (input)=>{
  let errors = {}
    if(!input.username){
      errors.username = 'Username is requerid'
  }else if(!/(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/.test(input.username)){
    errors.username = 'User name is invalid enter a valid user'
  }
  return errors
}


export default function EditProfile({dataProfile,setVisibleUser}) {
//---------------------------------------------estados y useEffect------------------------------------------------------------------
const username = dataProfile.username
const [putUserm,setPutUser] = useState({
      username:username,
})
const { token } = useToken();
const [error, setError] = useState({})
//------------------------------------------------Hoocks-------------------------------------------------------------------------------

//-----------------------------------------------Functions----------------------------------------------------------------------------- 
const handleChange = (e)=>{
  setPutUser({
    ...putUserm,
    username:e.target.value
  })
  setError(validate({...putUserm,username:e.target.value}))
}
const config = {
  headers: { Authorization: `Bearer ${token}` }
};
const sendPutUser = async()=>{
  await axios.put("http://localhost:4000/api/user/useredit",putUserm,config)
  const element = document.querySelector("#sss")
  element.innerHTML=""
    setVisibleUser(false) 
    alert("data uploaded successfully")
}
const cancelX=()=>{
  setVisibleUser(false)
}

//_---------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className={style.container}> 
      <div className={style.containerX}>
        <div onClick={cancelX} className={style.X}>X</div> 
      </div> 
        <input className={error.username ? style.inputError: style.input}  id="sss" name="username" type="text" placeholder="new Username" onChange={handleChange}/>    
        {error.username && (<p style={{color:"red"}}>{error.username}</p>)}
        <button disabled={error.username ? true: false} onClick={sendPutUser}>Send</button>
    </div>
  )
}
