import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
const handleHola = ()=>{
    const botMessage = createChatBotMessage('Hello, I am your virtual assistant, I can help you with these issues..',{
      widget: "options"
    })

    setState((prev)=>({
        ...prev,
        messages:[...prev.messages,botMessage]
    }));
};
const handleSaldo = ()=>{
  const botMessage = createChatBotMessage('fantastic now I show you information on the subject of Balances, click on the question',{
    widget: "saldo"
  })

  setState((prev)=>({
    ...prev,
    messages:[...prev.messages,botMessage]
}));
}

const handleServicio = ()=>{
  const botMessage = createChatBotMessage('fantastic now I show you information on the subject of Services, click on the question',{
    widget: "servicio"
  })

  setState((prev)=>({
    ...prev,
    messages:[...prev.messages,botMessage]
}));
}

const handleTransaccion = ()=>{
  const botMessage = createChatBotMessage('fantastic now I show you information on the topic of Transactions, click on the question',{
    widget: "transaccion"
  })

  
  setState((prev)=>({
    ...prev,
    messages:[...prev.messages,botMessage]
  }));
}

const handleBot = ()=>{
  const botMessage = createChatBotMessage("I'm sorry I'm not understanding your question, these are the issues I can help you with",{
      widget: "options"
    
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
            handleTransaccion,
            handleBot
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;