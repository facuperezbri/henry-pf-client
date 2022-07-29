import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
const handleHola = ()=>{
    const botMessage = createChatBotMessage('Hola mucho gusto en que puedo ayudarte my nombre es andres y soy tu asistente virtual.',{
      widget: "options"
    })

    setState((prev)=>({
        ...prev,
        messages:[...prev.messages,botMessage]
    }));
};
const handleSaldo = ()=>{
  const botMessage = createChatBotMessage('fantastico ahora le muestro informacion sobre el tema de Saldos',{
    widget: "saldo"
  })

  setState((prev)=>({
    ...prev,
    messages:[...prev.messages,botMessage]
}));
}

const handleServicio = ()=>{
  const botMessage = createChatBotMessage('fantastico ahora le muestro informacion sobre el tema de Servicios',{
    widget: "servicio"
  })

  setState((prev)=>({
    ...prev,
    messages:[...prev.messages,botMessage]
}));
}

const handleTransaccion = ()=>{
  const botMessage = createChatBotMessage('fantastico ahora le muestro informacion sobre el tema de Transacciones',{
    widget: "transaccion"
  })

  setState((prev)=>({
    ...prev,
    messages:[...prev.messages,botMessage]
}));
}

 
 
 

    return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHola,
            handleSaldo,
            handleServicio,
            handleTransaccion
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;