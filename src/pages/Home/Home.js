import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import AccountDetail from '../../components/AccountDetail/AccountDetail'
import style from './Home.module.css'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../../chatbot/config';
import MessageParser from '../../chatbot/MessageParser';
import ActionProvider from '../../chatbot/ActionProvider';
import {useDispatch,useSelector} from 'react-redux'
import{closeChatBot} from '../../redux/actions/index'

export default function Home () {
  const windowChatBot = useSelector((state)=> state.chatBot)
  const dispatch = useDispatch()
  const sendBotchangeState = ()=>{
    dispatch(closeChatBot())
  }
  




  return (
    <div className={style.container}>
      <Nav />
      <AccountDetail />
      <div  className={style.bot}>
        {!windowChatBot?<img className={style.img} onClick={sendBotchangeState} src= "https://w7.pngwing.com/pngs/34/887/png-transparent-online-chat-computer-icons-livechat-conversation-others-logo-online-chat-conversation.png"/>
        :  <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        disableScrollToBottom={false}
      />
      }    
       </div>
    </div>
  )
}







