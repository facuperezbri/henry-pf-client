import React from 'react';

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {
    if(message.includes('hola')){
        actions.handleHola();
    }
    if(message.includes('saldo')){
      actions.handleSaldo();
    }
    if(message.includes('transacciones')){
      actions.handleTransaccion();
    }
    if(message.includes('servicios')){
      actions.handleServicio();
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