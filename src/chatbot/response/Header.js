import React from 'react'
import {useDispatch} from 'react-redux'
import{closeChatBot} from '../../redux/actions/index'



export default function Header() {
    const dispatch = useDispatch()
    
    const sendBotchangeState = ()=>{
        dispatch(closeChatBot())
    }
    return (
        <div  style={{ backgroundColor: '#1d3557', padding: "5px", borderRadius: "3px",color:"white",fontWeight:"600",textAlign:"center",cursor:"pointer",display:"flex",justifyContent:"space-between"}}>
            chat online with bot
            <button style={{width:"15%", display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6rem",backgroundColor:"red"}} onClick={sendBotchangeState}>x</button>
        </div>
  )
}
