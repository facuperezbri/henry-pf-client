
import React, { useState } from 'react'
import Favorites from '../../components/Favourites/Favourites'
import Nav from '../../components/Nav/Nav'
import Transaction from '../../components/Transaction/Transaction'


export default function Wallet () {
  const [cvu, setCvu] = useState()


  return (
    <div className='flex'>
      <Nav />
      <div className='grid p-10 w-full place-content-center'>
        <section className='flex gap-5'>
          <Transaction cvuFav={cvu} setCvuFav={setCvu} />
          <Favorites setCvuFav={setCvu} />
        </section>
      </div>
    </div>
  )
}
