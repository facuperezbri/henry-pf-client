
import React, { useState } from 'react'
import Favorites from '../../components/Favourites/Favourites'
import Nav from '../../components/Nav/Nav'
import Transaction from '../../components/Transaction/Transaction'


export default function Wallet () {
  const [cvu, setCvu] = useState()


  return (
    <div className='flex'>
      <Nav />
      <div className='flex flex-col w-full'>

          <div className='mt-10 ml-10'>
        <h1 className='text-5xl mb-8 font-bold flex justify-start'>The wallet</h1>
        <h6 className='flex justify-start'>Get to charge your account and move your money!</h6>
          </div>

      <div className='flex justify-center my-10 p-10 w-full'>
        <section className='flex flex-col w-5/6 xl:flex-row gap-4'>
          <Transaction cvuFav={cvu} setCvuFav={setCvu} />
          <Favorites setCvuFav={setCvu} />
        </section>
      </div>

      </div>
    </div>
  )
}
