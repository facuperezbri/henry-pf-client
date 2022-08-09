
import React, { useState } from 'react'
import Favorites from '../../components/Favourites/Favourites'
import Nav from '../../components/Nav/Nav'
import Transaction from '../../components/Transaction/Transaction'


export default function Wallet () {
  const [cvu, setCvu] = useState()


  return (
    <div className='flex'>
      <Nav />
      <div className='flex justify-center my-auto p-10 w-full'>
        <section className='flex flex-col w-5/6 xl:flex-row gap-4'>
          <Transaction cvuFav={cvu} setCvuFav={setCvu} />
          <Favorites setCvuFav={setCvu} />
        </section>
      </div>
    </div>
  )
}
