import style from './Faq.module.css'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../../chatbot/config';
import MessageParser from '../../chatbot/MessageParser';
import ActionProvider from '../../chatbot/ActionProvider';

export default function Landing () {
  return (
    <div className={style.hola}> 
    <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        disableScrollToBottom={false}
      />
   </div>
  )
}
