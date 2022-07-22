import React from 'react'

import Nav from '../../components/Nav/Nav'
import Profile from "../../components/Profile/Profile";

import style from './Profile.module.css'

export default function ProfilePage () {
  return (
    <div className={style.container}>
      <Nav />
      <Profile />
    </div>
  )
}
