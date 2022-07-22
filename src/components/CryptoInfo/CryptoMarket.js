import React, { useEffect, useState } from 'react'
import TableCoins from './TableCoins'
import { useSelector, useDispatch } from "react-redux";
import { getCryptos, orderCryptoABC, orderCryptoPrice } from '../../redux/actions/index'
import styles from './CryptoMarket.module.css'


const CryptosInfo = () => {
  // const [coin, setCoin] = useState([])
  const allCryptos = useSelector((state) => state.allCryptos);
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')
  const [price, setPrice] = useState('')

  
   useEffect(() => {
    dispatch(getCryptos());
    // setCoin(allCryptos)
   }, []);

   function handleSortedCryptosTitle(e) {
    e.preventDefault();
    dispatch(orderCryptoABC(e.target.value));
    setOrder(e.target.value);
  }

  function handleSortedPrice(e) {
    e.preventDefault();
    dispatch(orderCryptoPrice(e.target.value));
    setPrice(e.target.value);
  }
 

  return (
      <div className={styles.container}>
        <input type="text" placeholder='Find cryptos' className={styles.input} onChange={(e) => { setSearch(e.target.value) }}></input>
        <h1>Crypto markets</h1>
        <div> <select
            className={styles.select}
            onChange={(e) => handleSortedCryptosTitle(e)}
          >
            <option value="">Sort Alfabeticamente</option>
            <option value="Asc">A to Z</option>
            <option value="Desc">Z to A</option>
          </select>
          <select
            className={styles.select}
            onChange={(e) => handleSortedPrice(e)}
          >
            <option value="">Sort Price</option>
            <option value="Asc">mayor a menor</option>
            <option value="Desc">menor a mayor</option>
          </select></div>
        
        <TableCoins coins={allCryptos} search={search}/>
      </div>
  )
}

export default CryptosInfo
