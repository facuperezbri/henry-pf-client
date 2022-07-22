import React from 'react'

import Nav from '../../components/Nav/Nav'
import Faq from '../../components/Faq/Faq'

import style from './Faq.module.css'

export default function Wallet () {
  return (
    <div className={style.container}>
      <Nav />
      <Faq />
    </div>
  )
}