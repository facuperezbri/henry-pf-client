import React, { useEffect, useState } from 'react'
import Style from './Profile.module.css'
import { GET_USER_DATA } from '../../services/GET_USER_DATA'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Profile () {
  const [dataProfile, setDataProfile] = useState("")
  const globalData = useSelector(state => state.userData)


  if (globalData.length === 0) {

  }
  useEffect(() => {
    GET_USER_DATA(window.localStorage.getItem("token"))
      .then(data => setDataProfile(data))
  }, [])

  console.log(dataProfile)

  return (
    <div className={Style.main}>
      {dataProfile ? <div className={Style.container}>
        <img className={Style.img} src={dataProfile?.profilepic} />
        <h2>{dataProfile.username}</h2>
      </div> : <h1>Loading...</h1>
      }

      {dataProfile ? <div className={Style.containerDetail}>
        <h2><span>Nombre:</span> {dataProfile.name}</h2>
        <h2><span>Last Name: </span> {dataProfile.lastname}</h2>
        <h2><span>DNI:</span> {dataProfile.dni}</h2>
        <h2><span>Email:</span> {dataProfile.email}</h2>
      </div> : null
      }
      {dataProfile ? <div className={Style.containerDetail}>
        <h2 style={{ textAlign: "center", color: "white" }}>Cuentas</h2>
        <ul style={{ fontSize: "1rem", fontWeight: "700" }}>
          <li>Balance: {dataProfile.accounts[0].balance}</li>
          <li>CVU: {dataProfile.accounts[0].cvu}</li>
          <li>Type of Account: {dataProfile.accounts[0].typeOfAccount}</li>
        </ul>
      </div> : null
      }
      {dataProfile ? <Link to="/home"><button>Home</button></Link> : null}
    </div>
  )
}
