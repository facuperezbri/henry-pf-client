import React,{useEffect,useState}from 'react'
import style from "./MyAvatar.module.css"
import {getUser} from "../../redux/actions/index"
import {useSelector,useDispatch} from "react-redux"
import { useToken } from '../../hooks/useToken'

export default function MyAvatar() {
    const dataProfile = useSelector((state)=>state.userData);
    const dispatch = useDispatch()
  const { token } = useToken();

    useEffect(() => {
      dispatch(getUser(token))
      }, [])
     
  return (
    <div className={style.container}>
        <img src={dataProfile.profilepic}/>
    </div>
  )
}
