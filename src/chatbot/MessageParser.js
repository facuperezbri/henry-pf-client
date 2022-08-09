import React from 'react';

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {
    if(message.toLowerCase().includes('hello')){
        return actions.handleHola();
    }
    if(message.toLowerCase().includes('balance')){
      return actions.handleSaldo();
    }
    if(message.toLowerCase().includes('transactions')){
      return actions.handleTransaccion();
    }
    if(message.toLowerCase().includes('services')){
      return actions.handleServicio();
    }
    if(message !== "saldo"||"hola"||"transacciones"||"servicios"){
    return  actions.handleBot()
    }
  };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;