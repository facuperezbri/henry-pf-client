import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './actionComponents/Option'
import Quiz from './response/Quiz';
import FlightBotAvatar from './response/Avatar'
import MyUserAvatar    from './response/MyAvatar'
import Header from './response/Header'

const botName = 'wallet Bot'


const config = {
  initialMessages: [createChatBotMessage(`Hi mi name is ${botName}, how can i help you ?`,{
    widget: 'options',
  })],
  botName: botName,
  widgets: [
    {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props}/>,

    },
    {
        widgetName: "transaccion",
        widgetFunc: (props) => <Quiz {...props}/>,
        props:{
            questions: [
                {
                    question: "how do i make a transfer?",
                    answer:"to make a transfer go to the wallet section and fill in the requested fields selecting the destination cvu to deposit",
                    id:1
                },
                {
                    question: "how long does a transfer take?",
                    answer:"la transferencia puede tener un plazo de demora maximo de 2hs, pero comunmente se hace al instante",
                    id:2
                },
                {
                    question: "can i cancel my transfer?",
                    answer:"To cancel your transfer you have a period of 3 hours, after this limit the action will be deposited",
                    id:3
                }
            ]

        }
    },
    {
        widgetName: "servicio",
        widgetFunc: (props) => <Quiz {...props}/>,
        props:{
            questions: [
                {
                    question: "what services do we offer?",
                    answer:"have your money virtually on any device, be able to transfer quickly and without delay",
                    id:1
                },
                {
                    question: "my money will be safe?",
                    answer:"you should not worry your money is protected",
                    id:2
                }
            ]

        }
    },

    {
        widgetName: "saldo",
        widgetFunc: (props) => <Quiz {...props}/>,
        props:{
            questions: [
                {
                    question: "how to load balance in my wallet ?",
                    answer:"To load the balance in your wallet, you will need to load in the load section with the fast payment or easy payment option.",
                    id:1
                },
                {
                    question: "how long does it take to recharge ?",
                    answer:"Normally the loads are instantaneous, but it can happen that it takes 2 hours",
                    id:2
                }
            ]

        }
    }
  ],
  customStyles:{
    botMessageBox: {
        backgroundColor:'#48cae4',
    },
    chatButton: {
        backgroundColor:'#0077b6',
    },
  },
  customComponents: {
    // Replaces the default header
   header: () => (props)=><Header {...props}/>,
   botAvatar: (props) => <FlightBotAvatar {...props} />,
   userAvatar: (props) => <MyUserAvatar {...props} />,
 },
};


export default config;