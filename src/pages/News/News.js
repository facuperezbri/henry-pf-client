import React from 'react'

import Nav from '../../components/Nav/Nav'
import News from '../../components/News/News'

import style from './News.module.css'

export default function NewsPage () {
  return (
    <div className={style.container}>
      <Nav />
      <News />
    </div>
  )
}