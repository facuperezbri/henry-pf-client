import React from 'react'

import Nav from '../../components/Nav/Nav'
import CryptoMarket from '../../components/CryptoInfo/CryptoMarket'

import style from './Cryptos.module.css'

export default function Wallet () {
  return (
    <>
    <Nav />
    <div className={style.container}>
      <CryptoMarket />
    </div>
    </>
  )
}
