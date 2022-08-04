import React from 'react'
import Favorites from '../../components/Favourites/Favourites'
import Nav from '../../components/Nav/Nav'
import style from './Wallet.module.css'
import Transaction from '../../components/Transaction/Transaction'


export default function Wallet () {

  return (
    <div className={style.container}>
      <Nav />
      <div className='flex'>
        <Transaction />
        <Favorites />
      </div>
    </div>
  )
}
