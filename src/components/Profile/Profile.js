import React, { useEffect, useState } from "react";
import Style from "./Profile.module.css";
import { GET_USER_DATA } from "../../services/GET_USER_DATA";
import { Link } from "react-router-dom";
import image from "../../assets/img/image.jpg";
import pen from '../../assets/icons/pen.svg'
export default function Profile() {
  // const [dataProfile,setProfile] = useState("")
  //     useEffect(()=>{
  //  GET_USER_DATA(window.localStorage.getItem("token"))
  //  .then(data => setProfile(data))
  //   },[])

  return (
    <div className={Style.main}>
      <div className={Style.container}>
        <img className={Style.img} src={image} />
        <button><img src={pen} alt="pen edit" className={Style.pen}/></button>

      </div>
      <div className={Style.containerDetail}>
        <div className={Style.containerName}>
          <div>
          <label>
            First name
            <input type="text" value="matt" readonly className={Style.input} />
          </label>
          </div>
          <div>
          <label>
            Last name
            <input
              type="text"
              value="britez"
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
              value="britez.maty@gmail.com"
              readonly
              className={Style.input}
            />
          </label></div> <div> <label>
            UserName
            <input
              type="text"
              value="britezmatt"
              readonly
              className={Style.input}
            />
          </label><button><img src={pen} alt="pen edit" className={Style.pen}/></button></div>
      </div>
     
        <button>Change password</button>
      
    </div>
  );
}
