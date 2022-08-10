import React from 'react'
import { Link } from "react-router-dom"
import styles from "./TableCoins.module.css"
import Card from "../uiComponents/Card";
const TableCoins = ({ coins, search }) => {

  const filteredCoins = coins?.filter((coin) => {
    return (
      coin?.name?.toLowerCase().includes(search.toLowerCase()) ||
      coin?.symbol?.toLowerCase().includes(search.toLowerCase())
    )
  })
   

  return (
    <div className={styles.divcontainer}>
      
        
      
        {filteredCoins.length === 0 ?<h1 style={{fontSize:"2rem", fontWeight:"700"}}>crypto not found</h1>: filteredCoins?.map((element) => (   
          <>
          <Link key={element?.id} to={`/cryptosmarket/${element?.id}`}>
          <Card>
            <div className={styles.container}>
              <div className={styles.name}>{element?.name}</div>
              <div className={styles.name}>{element?.symbol}</div>
              <div className={styles.img}> <img src={element?.image} alt={element.name} width={50} height={50} /></div>
              <div className={styles.price}>${element?.currentPrice}</div>
              <div className={ element?.dailyRateChange > 0 ? styles.sucess : styles.danger}>% {Math.round((element?.dailyRateChange + Number.EPSILON)*100)/100}</div>
            </div>
          </Card>
           </Link>
           </>
        ))}
     </div>
  )
}

export default TableCoins
