import React,{useState} from 'react'
import Nav from '../../components/Nav/Nav'
import AccountDetail from '../../components/AccountDetail/AccountDetail'
import style from './Home.module.css'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../../chatbot/config';
import MessageParser from '../../chatbot/MessageParser';
import ActionProvider from '../../chatbot/ActionProvider';


export default function Home () {
  const[interruptor,setInterruptor] = useState(false)


  
  return (
    <div className={style.container}>
      <Nav />
      <AccountDetail />
      <div  className={style.bot}>
        {!interruptor?<img className={style.img} onClick={()=>setInterruptor(!interruptor)} src= "https://w7.pngwing.com/pngs/34/887/png-transparent-online-chat-computer-icons-livechat-conversation-others-logo-online-chat-conversation.png"/>
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







