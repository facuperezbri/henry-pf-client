import React from 'react'
import style from './Nav.module.css'
import { Link } from "react-router-dom"

import Dashboard from '../../assets/icons/Sidebar/Dashboard.svg'
import FAQ from '../../assets/icons/Sidebar/FAQ.svg'
import Logout from '../../assets/icons/Sidebar/Logout.svg'
import News from '../../assets/icons/Sidebar/News.svg'
import Settings from '../../assets/icons/Sidebar/Settings.svg'
import Wallet from '../../assets/icons/Sidebar/Wallet.svg'

export default function Nav () {

  return (
    <nav className={style.header}>
      <div >
        <h3>wallet.</h3>
        <ul className={style.itemsNav}>
          <li className={style.listItem}>
            <img src={Dashboard} alt='Dashboard' /><Link to='/home'>Dashboard</Link>
          </li>
          <li className={style.listItem}>
            <img src={Wallet} alt='Wallet' /><Link to='/wallet'>Wallet</Link>
          </li>
          <li className={style.listItem}>
            <img src={News} alt='News' /><Link to='/news'>News</Link>
          </li>
          <li className={style.listItem}>
            <img src={Settings} alt='Settings' /><Link to='/settings'>Settings</Link>
          </li>
          <li className={style.listItem}>
            <img src={FAQ} alt='FAQ' /><Link to='/faq'>F.A.Q</Link>
          </li>
        </ul>
      </div>
      <ul className={style.itemsNav}>
        <li className={style.listItem}>
          <img src={Logout} alt='Log out' /><Link to="/logout">Log out</Link>
        </li>
      </ul>
    </nav>
  )
}
