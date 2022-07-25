import React from 'react'
import { Link } from "react-router-dom"

const CoinRow = ({ element }) => {
  return (
    <Link key={element.id} to={`/cryptomarket/${element.id}`}>
    <tr>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>
        <img src={element.image} alt={element.name} width={50} height={50} />
      </td>
      <td>${element.currentPrice}</td>
      <td>% {element.dailyRateChange}</td>
    </tr>
     </Link>
  )
}

export default CoinRow
