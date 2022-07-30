import React,{useEffect,useState} from 'react'
import style from './EditProfile.module.css'
import axios from "axios"

export default function EditProfile({dataInput,dataProfile}) {
//---------------------------------------------estados y useEffect------------------------------------------------------------------
const id = dataProfile.id;
const profilepic = dataProfile.profilepic;
const password = dataProfile.password;
const username = dataProfile.username
console.log(dataInput)
const [putUserm,setPutUser] = useState({
      id:id,
      profilepic:profilepic,
      password:password,
      username:username,
  })
//------------------------------------------------Hoocks-------------------------------------------------------------------------------

//-----------------------------------------------Functions----------------------------------------------------------------------------- 
const handleChange = (e)=>{
  setPutUser({
    ...putUserm,
    [e.target.name]:e.target.value
  })
}
const sendPutUser = async()=>{
  await axios.put("http://localhost:4000/api/user/useredit",putUserm)
  // const element = document.querySelector()
}
//_---------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className={style.container}>  
      <input id="sss" name={dataInput.name} type={dataInput.type} placeholder={dataInput.placeholder} onChange={handleChange}/>    
      <button onClick={sendPutUser}>Send</button>
    </div>
  )
}
