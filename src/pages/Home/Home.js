import React from 'react'

import Nav from '../../components/Nav/Nav'
import AccountDetail from '../../components/AccountDetail/AccountDetail'

import style from './Home.module.css'

export default function Home () {
  return (
    <div className={style.container}>
      <Nav />
      <AccountDetail />
    </div>
  )
}
