import React,{useEffect,useState} from 'react'
import style from './EditProfile.module.css'
import axios from "axios"
import { useToken } from '../../hooks/useToken'

export default function EditProfile({dataInput,dataProfile,setVisibleUser,setVisible}) {
//---------------------------------------------estados y useEffect------------------------------------------------------------------
const password = dataProfile.password;
const username = dataProfile.username
const [putUserm,setPutUser] = useState({
      password:password,
      username:username,
})
const { token } = useToken();

//------------------------------------------------Hoocks-------------------------------------------------------------------------------

//-----------------------------------------------Functions----------------------------------------------------------------------------- 
const handleChange = (e)=>{
  setPutUser({
    ...putUserm,
    [e.target.name]:e.target.value
  })
}
const config = {
  headers: { Authorization: `Bearer ${token}` }
};
const sendPutUser = async()=>{
  await axios.put("http://localhost:4000/api/user/useredit",putUserm,config)
  const element = document.querySelector("#sss")
  element.innerHTML=""
  if(element.type === "text"){
    setVisibleUser(false) 
    }else{
     setVisible(false)
    } 
    alert("data uploaded successfully")

}
const cancelX=()=>{
  const element = document.querySelector("#sss")
  if(element.type === "text"){
  setVisibleUser(false)
  return 
  }else{
   return  setVisible(false)
  } 
}
//_---------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className={style.container}> 
      <div className={style.containerX}>
        <div onClick={cancelX} className={style.X}>X</div>  
      </div> 
      <input className={style.input} id="sss" name={dataInput.name} type={dataInput.type} placeholder={dataInput.placeholder} onChange={handleChange}/>    
      <button onClick={sendPutUser}>Send</button>
    </div>
  )
}
