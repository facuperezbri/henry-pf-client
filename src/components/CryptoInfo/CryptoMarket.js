import React, { useEffect, useState } from 'react'
import TableCoins from './TableCoins'
import { useSelector, useDispatch } from "react-redux";
import { getCryptos, orderCryptoABC, orderCryptoPrice } from '../../redux/actions/index'
import styles from './CryptoMarket.module.css'
import loading from '../../assets/spinner/spinner.svg'
import Card from "../uiComponents/Card";


const CryptosInfo = () => {
  // const [coin, setCoin] = useState([])
  const allCryptos =useSelector((state) => state.allCryptos);
 
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')
  const [price, setPrice] = useState('')


  useEffect(() => {
    dispatch(getCryptos());
    // setCoin(allCryptos)
  }, []);


  function handleSortedCryptosTitle (e) {
    e.preventDefault();
    dispatch(orderCryptoABC(e.target.value));
    setOrder(e.target.value);
  }

  function handleSortedPrice (e) {
    e.preventDefault();
    dispatch(orderCryptoPrice(e.target.value));
    setPrice(e.target.value);
  }
  if (allCryptos?.length === 0) {
    return (<div className={styles.detailContainer}>
      <div className={styles.loading}>
        <img src={loading} alt="Loading" />
      </div>
    </div>)
  }

  return (
      <div className={styles.container}>
        <h1 className='text-5xl mb-8 font-bold'>Cryptos</h1>
        <h6 className='flex justify-end'>Get to know further details about</h6>
        <h6 className='flex justify-end'>the best cryptos in the market!</h6>

        <Card>
          
      <div className={styles.containerInputs}>
        <input type="text" placeholder='Find cryptos...' className={styles.input} onChange={(e) => { setSearch(e.target.value) }}></input>
        
<div className='flex flex-col justify-center items-center'>
  <label className='m-2'> Sort by:</label>
  <div className='flex flex-row'>
        <select
            className={styles.select}
            onChange={(e) => handleSortedCryptosTitle(e)}
          >
            <option selected={true} disabled="disabled">Letter...</option>
            <option value="Asc">A-Z</option>
            <option value="Desc">Z-A</option>
          </select>

          <select
            className={styles.select}
            onChange={(e) => handleSortedPrice(e)}
          >
            <option selected={true} disabled="disabled">Price...</option>
            <option value="Asc">High</option>
            <option value="Desc">Low</option>
          </select>
  </div>
</div>
      </div>
        </Card>
        <div className={styles.containerCryptos}>
          <TableCoins coins={allCryptos} search={search}/>
        </div>
      </div>
  )
}

export default CryptosInfo
