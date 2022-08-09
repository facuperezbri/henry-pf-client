import React from 'react'

import Nav from '../../components/Nav/Nav'
import RateForm from "../../components/rateform/RateForm";

import style from './RateForm.module.css'

export default function ProfilePage () {
  return (
    <div className={style.container}>
      <Nav />
      <RateForm />
    </div>
  )
}