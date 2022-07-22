import React from 'react'

const CoinRow = ({ element }) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>
        <img src={element.image} alt={element.name} width={50} height={50} />
      </td>
      <td>${element.currentPrice}</td>
      <td>% {element.dailyRateChange}</td>
    </tr>
  )
}

export default CoinRow
