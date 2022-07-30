import React, { useEffect, useState } from "react";
import Style from "./Profile.module.css";
import { GET_USER_DATA } from "../../services/GET_USER_DATA";
import pen from '../../assets/icons/pen.svg'
<<<<<<< HEAD
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
      
=======
import EditProfile from "./EditProfile";


export default function Profile () {
  const [visible, setVisible] = useState(false)
  const [visibleImg, setVisibleImg] = useState(false)
  const [visibleUser, setVisibleUser] = useState(false)
  const [dataProfile, setProfile] = useState("")
  const [dataInput, setDataInput] = useState({})
  const [putInterruptor, setPutInterruptor] = useState(false)
  //---------------------------------------------------------------------------------------------------

  const handleInterruptor = () => {
    if (putInterruptor) {
      setPutInterruptor(false)
    }
    if (!putInterruptor) {
      setPutInterruptor(true)
    }
    setVisibleImg(false)
    setVisible(false)
    setVisibleUser(false)
  }

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
  }, [])

  return (
    <div className={Style.main}>

      <div className={Style.container}>
        <img className={Style.img} src={dataProfile.profilepic} alt={"Profile"} />
        <div className={Style.btnImg} onClick={interruptorImg}><img src={pen} alt="pen edit" className={Style.pen} /></div>
        {visibleImg ? <EditProfile dataInput={dataInput} dataProfile={dataProfile} /> : null}
      </div>

      <div className={Style.containerDetail}>
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
        </label>
        </div>
        <div className={Style.user}> <label>
          UserName
          <input
            type="text"
            value={dataProfile.username}
            readonly
            className={Style.input}
          />
        </label>
          <div className={Style.btnUserImg} onClick={interruptorUser}><img src={pen} alt="pen edit" className={Style.pen} /></div>
        </div>
        {visibleUser ? <EditProfile dataInput={dataInput} dataProfile={dataProfile} /> : null}

      </div>
      <button onClick={interruptor}>Change password</button>
      {visible ? <EditProfile dataInput={dataInput} dataProfile={dataProfile} /> : null}
>>>>>>> 31d317cb83d310be63eb658ce2e40550aaea7947
    </div>
  );
}
