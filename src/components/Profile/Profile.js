import React, { useEffect, useState } from "react";
import Style from "./Profile.module.css";
import { GET_USER_DATA } from "../../services/GET_USER_DATA";
import pen from '../../assets/icons/pen.svg'
import EditProfile from "./EditProfile";
import EditImg from "./EditImg";

export default function Profile () {
  const [visible, setVisible] = useState(false)
  const [visibleImg, setVisibleImg] = useState(false)
  const [visibleUser, setVisibleUser] = useState(false)
  const [dataProfile, setProfile] = useState("")
  const [dataInput, setDataInput] = useState({})
  //---------------------------------------------------------------------------------------------------
  // console.log(dataProfile)
  const interruptor = () => {
    if (visible) setVisible(false)
    if (!visible) setVisible(true)
    setDataInput(
      {
        name: "password",
        type: "password",
        placeholder: "new Password"
      }
    )
  }
  const interruptorImg = () => {
    if (visibleImg) setVisibleImg(false)
    if (!visibleImg) setVisibleImg(true)
    setDataInput(
      {
        name: "profilepic",
        type: "text",
        placeholder: "url img"
      }
    )
  }
  const interruptorUser = () => {
    if (visibleUser) setVisibleUser(false)
    if (!visibleUser) setVisibleUser(true)
    setDataInput(
      {
        name: "username",
        type: "text",
        placeholder: "new username"
      }
    )
  }

  //---------------------------------------------------------------------------------------------------



  useEffect(() => {
    GET_USER_DATA(window.localStorage.getItem("token"))
      .then(data => setProfile(data))
  }, [visibleImg, visibleUser, visible])

  return (
    <div className={Style.main}>

      <div className={Style.container}>
        <img className={Style.img} src={dataProfile.profilepic} />
        <div className={Style.btnImg} onClick={interruptorImg}><img src={pen} alt="pen edit" className={Style.pen} /></div>
        {visibleImg ? <EditImg setVisibleImg={setVisibleImg} dataInput={dataInput} dataProfile={dataProfile} /> : null}
        {/* <img className={Style.img} src={dataProfile.profilepic} alt={"Profile"} />
        <div className={Style.btnImg} onClick={interruptorImg}><img src={pen} alt="pen edit" className={Style.pen} /></div>
        {visibleImg ? <EditProfile dataInput={dataInput} dataProfile={dataProfile} /> : null} */}
      </div>

      <div className={Style.containerDetail}>
        <div className={Style.containerName}>
          <div>
            <label>
              First name
              <input type="text" value={dataProfile.name} readonly className={Style.input} disabled />
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
                disabled
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
            disabled
          />
        </label>
        </div>
        <div className={Style.user}> <label>
          UserName
          <input
            type="text"
            value={dataProfile.username}
            readonly
            className={Style.input}
            disabled
          />
        </label>
          <div className={Style.btnUserImg} onClick={interruptorUser}><img src={pen} alt="pen edit" className={Style.pen} /></div>
        </div>

      </div>
      <button className={Style.btn} onClick={interruptor}>Change password</button>
      {visibleUser ? <EditProfile setVisibleUser={setVisibleUser} dataInput={dataInput} dataProfile={dataProfile} /> : null}
      {visible ? <EditProfile setVisible={setVisible} dataInput={dataInput} dataProfile={dataProfile} /> : null}
    </div>
  );
}
