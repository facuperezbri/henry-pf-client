import React from 'react'
import {useDispatch} from 'react-redux'
import{closeChatBot} from '../../redux/actions/index'
import style from './Header.module.css'


export default function Header() {
    const dispatch = useDispatch()
    
    const sendBotchangeState = ()=>{
        dispatch(closeChatBot())
    }
    return (
        <div  className={style.container}>
            chat online with bot
            <button onClick={sendBotchangeState} style={{height:"fit-content", textAlign:"center", width:"20px",marginLeft:"3rem"}}>x</button>
        </div>
  )
}
