import React from 'react'
import Nav from '../../components/Nav/Nav'
import style from './CryptoDetails.module.css'
import Details from '../../components/CryptoInfo/DetailsCrypto'

export default function CryptoDetails () {
  return (
    <>
    <div className={style.container}>
      <Nav />
      <Details />
    </div>
    </>
  )
}
