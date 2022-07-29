import React,{useEffect,useState} from 'react'
import style from './EditProfile.module.css'
import {useSelector} from 'react-redux'
import { GET_USER_DATA } from '../../services/GET_USER_DATA'




export default function EditProfile() {
//---------------------------------------------estados y useEffect------------------------------------------------------------------
    const [dataProfile, setDataProfile] = useState("")

    useEffect(() => {
        GET_USER_DATA(window.localStorage.getItem("token"))
          .then(data => setDataProfile(data))
      }, [])
//------------------------------------------------Hoocks-------------------------------------------------------------------------------

//-----------------------------------------------Functions----------------------------------------------------------------------------- 


//_---------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className={style.container}>
    
    
    </div>
  )
}
