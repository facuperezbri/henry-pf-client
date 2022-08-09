import React from 'react'
import Nav from '../../components/Nav/Nav'
import AboutUsComp from '../../components/AboutUsComp/AboutUsComp'
import style from './AboutUs.module.css'

export default function AboutUs () {
  return (
    <div className={style.container}>
      <Nav />
      <AboutUsComp />
    </div>
  )
}