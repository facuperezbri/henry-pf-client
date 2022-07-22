import React,{useEffect, useState} from 'react'
import Style from './Profile.module.css'
import {useDispatch,useSelector} from "react-redux"
import {dataProfile} from "../../redux/actions/index"
import {Link} from "react-router-dom"
import { GET_USER_DATA } from '../../services/GET_USER_DATA'
export default function Profile() {
    const profile = useSelector((state) => state.dataProfile)

    useEffect(()=>{
 GET_USER_DATA(window.localStorage.getItem("token"))
 .then(console.log)   
  },[])

  return (
    <div className={Style.main}>
      
    <Link to="/perfil/detail">
      <div className={Style.container}>
          <img className={Style.img} src={profile.profilepic}/>
          <h2>{profile.username}</h2>
      </div>
    </Link>
    </div>
  )
}
