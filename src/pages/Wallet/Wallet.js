import React from 'react'
import Favorites from '../../components/Favourites/Favourites'
import Nav from '../../components/Nav/Nav'
import Transaction from '../../components/Transaction/Transaction'


export default function Wallet () {

  return (
    <div className='flex'>
      <Nav />
      <div className='flex-col p-10'>
        <h2 className='font-semibold'>Wallet</h2>
        <section className='flex'>
          <Transaction />
          <Favorites />
        </section>
      </div>
    </div>
  )
}
