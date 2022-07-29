import React, { useEffect, useState } from "react";
import Style from "./Profile.module.css";
import { GET_USER_DATA } from "../../services/GET_USER_DATA";
import { Link } from "react-router-dom";
import image from "../../assets/img/image.jpg";
import pen from '../../assets/icons/pen.svg'
import { useSelector } from 'react-redux'

export default function Profile() {
   const [dataProfile,setProfile] = useState("")
   const globalData = useSelector(state => state.userData)

       useEffect(()=>{
    GET_USER_DATA(window.localStorage.getItem("token"))
    .then(data => setProfile(data))
     },[])

  return (
    <div className={Style.main}>
     {dataProfile ? <div className={Style.container}>
        <img className={Style.img} src={dataProfile?.profilepic} alt='pic'/>
        <button><img src={pen} alt="pen edit" className={Style.pen}/></button> 
      </div>
        : <h1>Loading...</h1>
     }

{dataProfile ? <div className={Style.containerDetail}>
        <div className={Style.containerName}>
          <div>
          <label>
            First name
            <input type="text" value={dataProfile.name} readonly className={Style.input} />
          </label>
          </div>
          <div>
          <label>
            Last name
            <input
              type="text"
              value={dataProfile.lastname}
              readonly
              className={Style.input}
            />
          </label>
          </div>
        </div>
        <div> <label>
            Email
            <input
              type="text"
              value={dataProfile.email}
              readonly
              className={Style.input}
            /> 
        
          </label></div> <div> <label>
            UserName
            <input
              type="text"
              value={dataProfile.username}
              readonly
              className={Style.input}
            />
          </label><button><img src={pen} alt="pen edit" className={Style.pen2}/></button></div>
      </div>
      : null
    }
     
        <button>Change password</button>
      
    </div>
  );
}
