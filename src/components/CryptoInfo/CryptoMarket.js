import React, { useEffect, useState } from 'react'
import TableCoins from './TableCoins'
import { useSelector, useDispatch } from "react-redux";
import {getCryptos} from '../../redux/actions/index'



const CryptosInfo = () => {
  // const [coin, setCoin] = useState([])
  const allCryptos = useSelector((state) => state.allCryptos);
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  
   useEffect(() => {
    dispatch(getCryptos());
    // setCoin(allCryptos)
   }, []);

 
  return (
      <div>
        <input type="text" placeholder='buscar cryptos' onChange={(e) => { setSearch(e.target.value) }}></input>
        <h1>Crypto markets</h1>
        <TableCoins coins={allCryptos} search={search}/>
      </div>
  )
}

export default CryptosInfo
