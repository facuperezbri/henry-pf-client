import React, { useEffect, useState } from "react";
import Style from "./Profile.module.css";
import { GET_USER_DATA } from "../../services/GET_USER_DATA";
import pen from '../../assets/icons/pen.svg'
import EditUser from "./EditUser"
import EditImg from "./EditImg"
import EditPassword from "./EditPassword"
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions';
export default function Profile () {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const [visibleImg, setVisibleImg] = useState(false)
  const [visibleUser, setVisibleUser] = useState(false)
  const dataProfile = useSelector(state => state.userData)
  //---------------------------------------------------------------------------------------------------
  const interruptor = () => {
    setVisible(!visible)
  }
  const interruptorImg = () => {
    if (visibleImg) setVisibleImg(false)
    if (!visibleImg) setVisibleImg(true)
  }
  const interruptorUser = () => {
    if (visibleUser) setVisibleUser(false)
    if (!visibleUser) setVisibleUser(true)
  }

  //---------------------------------------------------------------------------------------------------



  useEffect(() => {
    dispatch(getUser((window.localStorage.getItem("token"))))
  }, [visibleImg, visibleUser, visible])

  return (
    <div className={Style.main}>

      <div className={Style.container}>
        <img className={Style.img} src={dataProfile.profilepic} />
        <div className={Style.btnImg} onClick={interruptorImg}><img src={pen} alt="pen edit" className={Style.pen} /></div>
        {visibleImg ? <EditImg setVisibleImg={setVisibleImg} dataProfile={dataProfile} /> : null}
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
          Username
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
      {visibleUser ? <EditUser setVisibleUser={setVisibleUser} dataProfile={dataProfile} /> : null}
      {visible ? <EditPassword setVisible={setVisible} dataProfile={dataProfile} /> : null}
      <div className={Style.btn} onClick={interruptor}>Change password</div>

    </div>
  );
}
