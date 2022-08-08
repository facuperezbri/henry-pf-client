import React, { useEffect, useState } from "react";
import Style from "./Profile.module.css";
import EditUser from "./EditUser"
import EditImg from "./EditImg"
import EditPassword from "./EditPassword"
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions';
import Button from "../uiComponents/Button";
import Modal from "../uiComponents/Modal";
import Card from "../uiComponents/Card";
import { darkMode } from "../../redux/actions/index"
import CardText from "../uiComponents/CardText";
import SVGDarkLigth from "../../assets/icons/darkLight";

import UseDarkMode from "../../hooks/useDarkMode";


export default function Profile () {
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const [showModalImg, setShowModalImg] = useState(false)
  const [visibleUser, setVisibleUser] = useState(false)
  // const [darkMode, setDarkMode] = useState(window.localStorage.getItem('dark') === 'true')
  const { darkMode, changeDarkMode } = UseDarkMode()

  const dataProfile = useSelector(state => state.userData)
  //---------------------------------------------------------------------------------------------------
  const handlerShowModal = () => {
    setShowModal(!showModal)
  }
  const handlerShowModalImg = () => {
    setShowModalImg(!showModalImg)
  }
  // const interruptorImg = () => {
  //   if (visibleImg) setVisibleImg(false)
  //   if (!visibleImg) setVisibleImg(true)
  // }
  // const interruptorUser = () => {
  //   if (visibleUser) setVisibleUser(false)
  //   if (!visibleUser) setVisibleUser(true)
  // }

  //---------------------------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getUser((window.localStorage.getItem("token"))))
  }, [dispatch])
  // const handlerDarkMode = () => {
  //   setDarkMode(!darkMode)
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark')
  //     window.localStorage.setItem('darkmode', darkMode)
  //   }
  //   if (!darkMode) {
  //     document.documentElement.classList.remove('dark')
  //     window.localStorage.setItem('darkmode', darkMode)
      
  //   }
  // }



  return (
    <div className={Style.main}>

      <div className="rounded-full items-center" >
        <img className={Style.img} src={dataProfile?.profilepic} alt={dataProfile.username} onClick={handlerShowModalImg} />
      </div>
      <Card className="w-full">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <CardText>
              <span>
                {dataProfile?.name}
              </span>
            </CardText>

            <CardText>
              <span>
                {dataProfile?.lastname}
              </span>
            </CardText>
          </div>
          <CardText>
            <span>
              {dataProfile?.username}
            </span>
          </CardText>
          <CardText>
            <span>
              {dataProfile?.email}
            </span>
          </CardText>
        </div>
      </Card>
      {visibleUser && <EditUser setVisibleUser={setVisibleUser} dataProfile={dataProfile} />}
      {/* {visible && <EditPassword setVisible={setVisible} dataProfile={dataProfile} />} */}

      <Modal onClose={handlerShowModal} modal={showModal}>
        <EditPassword />
      </Modal>
      <Modal onClose={handlerShowModalImg} modal={showModalImg}>
        <EditImg handlerCloseModalImg={() => setShowModalImg(false)} dataProfile={dataProfile} />
      </Modal>

      <Button onClick={handlerShowModal}>
        Change password
      </Button>
      <div className='flex gap-6'>
        <Button onClick={changeDarkMode}>
          <SVGDarkLigth darkmode={darkMode} />
        </Button>
      </div>

    </div>
  );
}
