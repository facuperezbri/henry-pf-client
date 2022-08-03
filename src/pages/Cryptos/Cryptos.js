import React from 'react'

import Nav from '../../components/Nav/Nav'
import CryptoMarket from '../../components/CryptoInfo/CryptoMarket'

import style from './Cryptos.module.css'

export default function Wallet () {
  return (
    <>
      <div className={style.container}>
        <Nav />
        <div className={style.cryptocontainer}>
        <CryptoMarket />
        </div>
      </div>
    </>
  )
}
