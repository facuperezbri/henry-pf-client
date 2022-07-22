import React from 'react'
import { NavLink } from 'react-router-dom'

import Nav from '../../components/Nav/Nav'

import style from './Wallet.module.css'

export default function Wallet () {
  return (
    <div className={style.container}>
      <Nav />
      <NavLink exact to="/cryptosmarket" >
        <button className={style.buttonToCrypto}>Cryptos Market</button>
      </NavLink> 
    </div>
  )
}
