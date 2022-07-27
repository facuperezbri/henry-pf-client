import React from 'react'

export default function Option(props) {
   console.log(props)
  const options = [
    {
        Text:"saldo",
        handler:props.actionProvider.handleSaldo,
        id:1,
    },
    {
        Text:"transacciones",
        handler:props.actionProvider.handleTransaccion,
        id:2,
    },
    {
        Text:"servicios",
        handler:props.actionProvider.handleServicio,
        id:3,
    }
  ]
  const buttonMarkup = options.map((e)=>(

    <li key={e.id} onClick={e.handler} style={{ borderRadius: "15px", padding: "5px",cursor:"pointer", backgroundColor:"black", color:"white"}}>
        {e.Text}
    </li>
  ))
    return (
    <ul style={{display: "flex", gap:"3px"}}>{buttonMarkup}</ul>
  )
}
