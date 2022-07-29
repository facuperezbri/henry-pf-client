import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './actionComponents/Option'
import Quiz from './response/Quiz';
import Avatar from "./response/Avatar"

const botName = 'andres'

const config = {
  initialMessages: [createChatBotMessage(`Hola mi nombre es ${botName}, que deseas saber ?`,{
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
                    question: "como realizo una transferencia ?",
                    answer:"para hacer una transferencia dirijase a la opcion de transferir",
                    id:1
                },
                {
                    question: "cuanto demora la transferencia?",
                    answer:"la transferencia puede demorar hasta 1hs",
                    id:2
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
                    question: "que servicios ofrecemos?",
                    answer:"ofrecemos la seguridad de tu dinero",
                    id:1
                },
            ]

        }
    },

    {
        widgetName: "saldo",
        widgetFunc: (props) => <Quiz {...props}/>,
        props:{
            questions: [
                {
                    question: "como cargar saldo en mi villetera ?",
                    answer:"para cargar salgo dirajase a la barra de navegacion inconos cargas",
                    id:1
                },
                {
                    question: "cuanto tarda en hacerme la recarga ?",
                    answer:"la recarga puede demorar hasta 1hs",
                    id:2
                }
            ]

        }
    }
  ],
  customStyles:{
    botMessageBox: {
        backgroundColor:'red',
    },
    chatButton: {
        backgroundColor:'green',
    }
  },
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: 'green', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
   
 },
};


export default config;