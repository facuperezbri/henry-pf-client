import React,{useEffect, useState} from 'react'
import Style from './Profile.module.css'
import { GET_USER_DATA } from '../../services/GET_USER_DATA'
import {Link} from 'react-router-dom'
export default function Profile() {
const [dataProfile,setProfile] = useState("")
    useEffect(()=>{
 GET_USER_DATA(window.localStorage.getItem("token"))
 .then(data => setProfile(data))   
  },[])
  
  return (
    <div className={Style.main}>
      { dataProfile ? <div className={Style.container}>
          <img className={Style.img} src={dataProfile?.profilepic}/>
          <h2>{dataProfile.username}</h2>
      </div>: null
     }

     {dataProfile ? <div className={Style.containerDetail}>
          <h2>Nombre: {dataProfile.name}</h2>
          <h2>Last Name: {dataProfile.lastname}</h2>
          <h2>DNI: {dataProfile.dni}</h2>
          <h2>Email: {dataProfile.email}</h2>
      </div>:null
    }
    {dataProfile? <div className={Style.containerDetail}>
          <h2 style={{textAlign:"center"}}>Cuentas</h2>
        <ul style={{fontSize:"1rem",fontWeight:"700"}}>
          <li>Balance: {dataProfile.accounts[0].balance}</li>
          <li>CVU: {dataProfile.accounts[0].cvu}</li>
          <li>Type of Account: {dataProfile.accounts[0].typeOfAccount}</li>
        </ul>
        </div>:null
    }
    {dataProfile?<Link to="/home"><button>Home</button></Link>:null}
    </div>
  )
}
