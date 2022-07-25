import React from 'react'
import style from './Nav.module.css'
import { Link } from "react-router-dom"

import Dashboard from '../../assets/icons/Sidebar/Dashboard.svg'
import FAQ from '../../assets/icons/Sidebar/FAQ.svg'
import Logout from '../../assets/icons/Sidebar/Logout.svg'
import News from '../../assets/icons/Sidebar/News.svg'
import Settings from '../../assets/icons/Sidebar/Settings.svg'
import Wallet from '../../assets/icons/Sidebar/Wallet.svg'
import Profile from '../../assets/icons/Sidebar/Profile.svg'


export default function Nav () {

  function logOut () {
    window.localStorage.setItem("token", "")
  }

  return (
    <nav className={style.header}>
      <div>
        <h3 className={style.title}>wallet.</h3>
        <ul className={style.itemsNav}>
          <Link to='/profile'>
            <li className={style.listItem}>
              <img src={Profile} alt='Profile' /> <span className={style.listItem_text}>Profile</span>
            </li>
          </Link>
          <Link to='/home'>
            <li className={style.listItem}>
              <img src={Dashboard} alt='Dashboard' /> <span className={style.listItem_text}>Dashboard</span> 
            </li>
          </Link>
          <Link to='/wallet'>
            <li className={style.listItem}>
              <img src={Wallet} alt='Wallet' /><span className={style.listItem_text}>Wallet</span>
            </li>
          </Link>
          <Link to='/news'>
            <li className={style.listItem}>
              <img src={News} alt='News' /><span className={style.listItem_text}>News</span>
            </li>
          </Link>
          <Link to='/settings'>
            <li className={style.listItem}>
              <img src={Settings} alt='Settings' /> <span className={style.listItem_text}>Settings</span>
            </li>
          </Link>
          <Link to='/faq'>
            <li className={style.listItem}>
              <img src={FAQ} alt='FAQ' /><span className={style.listItem_text}>F.A.Q</span>
            </li>
          </Link>
        </ul>
      </div>
      <ul className={style.itemsNav}>
          <Link to="/">
            <li onClick={() => logOut()} className={style.listItem}>
                <img src={Logout} alt='Log out' /> <span className={style.listItem_text}>Log out</span>
            </li>
          </Link>
      </ul>
    </nav>
  )
}
