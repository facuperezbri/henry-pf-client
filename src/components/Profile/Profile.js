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
import CardText from "../uiComponents/CardText";
import SVGDarkLigth from "../../assets/icons/darkLight";
import { DELETE_ACCOUNT } from "../../services/DELETE_ACCOUNT";
import UseDarkMode from "../../hooks/useDarkMode";
import ProfileEpig from "../uiComponents/ProfileEpig";
import { useToken } from "../../hooks/useToken";
import useNotification from "../../hooks/useNotification";
import ButtonWithLoader from "../uiComponents/ButtonWithLoader";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function Profile () {
  const dispatch = useDispatch()
  const { setToken } = useToken()

  const navigate = useNavigate()

  const { error, success } = useNotification()
  const [showModal, setShowModal] = useState(false)
  const [showModalImg, setShowModalImg] = useState(false)
  const [showModalDeletAccount, setShowModalDeletAccount] = useState(false)

  const [isLoadingRemove, setIsLoadingRemove] = useState(false)

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

  useEffect(() => {
    dispatch(getUser((window.localStorage.getItem("token"))))
  }, [dispatch])

  const handlerDeleteAccount = () => {
    setIsLoadingRemove(true)
    DELETE_ACCOUNT().then(res => {
      if (res?.message) {
        success(res?.message)
        setToken('')
        navigate('/')
      }
      console.log(res?.message)
    }).catch((_error) => {
      error()
    }).finally(() => setIsLoadingRemove(false))
  }

  const handlerShowModalForDeleteAccount = () => {
    setShowModalDeletAccount(!showModalDeletAccount)
  }

  return (
    <div className={Style.main}>
      <ToastContainer />
      <ProfileEpig src={dataProfile?.profilepic} alt={dataProfile.username} onClick={handlerShowModalImg} />
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


      <Modal onClose={handlerShowModalForDeleteAccount} modal={showModalDeletAccount}>
          <div className="my-4">
            <CardText>
              <span className="text-xl">
                You want to delete your account? You will not be able to use again.
              </span>
            </CardText>
            <div className="flex justify-between mt-8">
              <Button onClick={handlerShowModalForDeleteAccount}>Cancel</Button>
              <ButtonWithLoader isLoading={isLoadingRemove} onClick={handlerDeleteAccount}>Confirm</ButtonWithLoader>
            </div>
          </div>
      </Modal>
      

      <Button className='mt-44' onClick={handlerShowModalForDeleteAccount}>Remove Account</Button>

    </div>
  );
}
