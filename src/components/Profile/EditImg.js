import React, { useState } from 'react'
import axios from 'axios';
import style from './EditImg.module.css'
import { UPDATE_PROFILE_IMAGE } from '../../services/UPDATE_PROFILE_IMAGE';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions'
import { useToken } from '../../hooks/useToken'

export default function EditImg({ setVisibleImg, dataProfile }) {
  const dispatch = useDispatch()
  const { token } = useToken()
  // console.log(setVisibleImg)
  const [image, setImage] = useState()

  const handlerImageChange = (e) => {
    setImage(e.target.files[0])
  }
  const sendPutUser = () => {
    UPDATE_PROFILE_IMAGE(image, dataProfile?.profilepicID).then((res) => {
      dispatch(getUser(token))
    }).catch(console.error)
  }
  return (
    <div className={style.container}>
      <div className={style.containerBtn}>
        <div onClick={() => setVisibleImg(false)} className={style.btn}>X</div>
      </div>
     
        <h2>insert profile picture</h2>
        <form>
          <input 
            type="file"
            name="file"
            palceholder="upload your image"
            onChange={handlerImageChange}
          />
        </form>
        <button onClick={sendPutUser}>send</button>
    </div>
  )
}

