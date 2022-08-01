import React from 'react'
import {useDispatch} from 'react-redux'
import{closeChatBot} from '../../redux/actions/index'



export default function Header() {
    const dispatch = useDispatch()
    
    const sendBotchangeState = ()=>{
        dispatch(closeChatBot())
    }
    return (
        <div onClick={sendBotchangeState} style={{ backgroundColor: '#1d3557', padding: "5px", borderRadius: "3px",color:"white",fontWeight:"600",textAlign:"center",cursor:"pointer"}}>
            chat online with bot
        </div>
  )
}
