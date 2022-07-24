import React from 'react'
import CoinRow from './CoinRow'
import { Link } from "react-router-dom"

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
          <Link key={element.id} to={`/cryptomarket/${element.id}`}>
          <CoinRow element={element} key={element.name} />
          </Link>
        ))}
      </tbody>
    </table>
  )
}

export default TableCoins
