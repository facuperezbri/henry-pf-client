import React from 'react'
import Favorites from '../../components/Favourites/Favourites'
import Nav from '../../components/Nav/Nav'
import Transaction from '../../components/Transaction/Transaction'


export default function Wallet () {

  return (
    <div className='flex'>
      <Nav />
      <div className='flex'>
        <h2>Wallet</h2>
        <Transaction />
        <Favorites />
      </div>
    </div>
  )
}
