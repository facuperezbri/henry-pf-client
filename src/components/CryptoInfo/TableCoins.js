import React from 'react'
import CoinRow from './CoinRow'

const TableCoins = ({ coins, search }) => {

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <td>
            <h2>Name</h2>
          </td>
          <td>
            <h2>Symbol</h2>
          </td>
          <td>
            <h2>Logo</h2>
          </td>
          <td>
            <h2>price</h2>
          </td>
          <td>
            <h2>variacion</h2>
          </td>
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((element) => (
          <CoinRow element={element} key={element.name} />
        ))}
      </tbody>
    </table>
  )
}

export default TableCoins
