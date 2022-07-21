import React, { useEffect, useState } from 'react'
import TableCoins from './TableCoins'
import { useSelector } from "react-redux";



const CryptosInfo = () => {
  const [coin, setCoin] = useState([])
  const allCryptos = useSelector((state) => state.allCryptos);

  const [search, setSearch] = useState('')
  
  
   useEffect(() => {
     setCoin(allCryptos)
   }, []);

 
  return (
      <div>
        <input type="text" placeholder='buscar cryptos' onChange={(e) => { setSearch(e.target.value) }}></input>
        <h1>Crypto markets</h1>
        <TableCoins coins={coin} search={search}/>
      </div>
  )
}

export default CryptosInfo
