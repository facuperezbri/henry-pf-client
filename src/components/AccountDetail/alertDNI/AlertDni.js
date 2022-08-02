import React, { useState } from 'react'
import style from './AlertDni.module.css'
import {useSelector} from 'react-redux'
export default function AlertDni({dniPassword, setInterruptor}) {
  const dataProfile = useSelector(state => state.userData)
  const [dni, setDni] = useState("")

  const comparateDni = ()=>{
    if(dni === dataProfile.dni){
        dniPassword("acceso")
        setInterruptor(false)
        return alert("successful data")
    }
    dniPassword("denegado")
    setInterruptor(false)
    return alert("the dni does not match try again later")
  }
  return (
    <div className={style.container}>
        <input  type="text" placeholder="enter DNI" onChange={(e)=> setDni(e.target.value)}/>
        <div>
            <button onClick={comparateDni}>send</button>
            <button onClick={()=>setInterruptor(false)} >cancel</button>
        </div>
    </div>
  )
}
