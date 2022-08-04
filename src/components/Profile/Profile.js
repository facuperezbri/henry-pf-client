import React, { useEffect, useState } from "react";
import Style from "./Profile.module.css";
import { GET_USER_DATA } from "../../services/GET_USER_DATA";
import pen from '../../assets/icons/pen.svg'
import EditUser from "./EditUser"
import EditImg from "./EditImg"
import EditPassword from "./EditPassword"
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions';
import Button from "../uiComponents/Button";
import Modal from "../uiComponents/Modal";

export const CardText = ({ children }) => (
  <div className="text-slate-700 p-2 bg-slate-300 w-full rounded-md hover:bg-slate-400 transition-all text-center"><span>{children}</span></div>
)
export default function Profile () {
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
  const [showModalImg, setShowModalImg] = useState(false)
  const [visibleUser, setVisibleUser] = useState(false)
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
  console.log(dataProfile)
  return (
    <div className={Style.main}>

      <div className="w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden">
        <img src={dataProfile?.profilepic} alt={dataProfile.username} onClick={handlerShowModalImg}/>
      </div>

      <div className="bg-slate-100 p-4 w-full rounded-b-md shadow-xl my-4 rounded-md flex flex-col gap-2">
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

      <button onClick={() => document.documentElement.classList.add('dark')}>
        Dark
      </button>

    </div>
  );
}
