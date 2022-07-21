import React,{useEffect, useState} from 'react'
import Style from './Profile.module.css'
import {useDispatch,useSelector} from "react-redux"
import {dataProfile} from "../../redux/actions/index"
import {Link} from "react-router-dom"

export default function Profile() {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.dataProfile)

    useEffect(()=>{
     dispatch(dataProfile())
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
