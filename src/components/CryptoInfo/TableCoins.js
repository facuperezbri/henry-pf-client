import React from 'react'
import { Link } from "react-router-dom"
import styles from "./TableCoins.module.css"

const TableCoins = ({ coins, search }) => {

  const filteredCoins = coins?.filter((coin) => {
    return (
      coin?.name?.toLowerCase().includes(search.toLowerCase()) |
      coin?.symbol?.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className={styles.divcontainer}>
        {filteredCoins?.map((element) => (   
          <>
          <Link key={element?.id} to={`/cryptosmarket/${element?.id}`}>
          <div className={styles.container}>
            <div>{element?.name}</div>
            <div>{element?.symbol}</div>
            <div> <img src={element?.image} alt={element.name} width={50} height={50} /></div>
            <div>${element?.currentPrice}</div>
            <div className={ element?.dailyRateChange > 0 ? styles.sucess : styles.danger}>% {element?.dailyRateChange}</div>
            </div>
           </Link>
           </>
        ))}
     </div>
  )
}

export default TableCoins
