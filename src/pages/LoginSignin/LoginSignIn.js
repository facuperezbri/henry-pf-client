import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../../components/account/login'
import SignIn from '../../components/account/signin'

import style from './loginSignin.module.css'

const LoginSignIn = () => {
  return (
    <div className={style.mainContainer}>
      <nav className={style.nav}><NavLink to='/'>wallet.</NavLink></nav>
      <main className={style.container}>
        <SignIn />
        <Login />
      </main>
    </div>
  )
}

export default LoginSignIn