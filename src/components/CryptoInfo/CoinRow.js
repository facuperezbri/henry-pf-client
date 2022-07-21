import React from 'react'

const CoinRow = ({ element }) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>
        <img src={element.image} alt={element.name} width={50} height={50} />
      </td>
      <td>{element.symbol}</td>
      <td>{element.current_price}</td>
      <td>{element.price_change_percentage_24h}</td>
    </tr>
  )
}

export default CoinRow
