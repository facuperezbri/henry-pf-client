import React, { useEffect, useState } from 'react'
import style from './Nav.module.css'
import { Link } from "react-router-dom"

import Dashboard from '../../assets/icons/Sidebar/Dashboard.svg'
import FAQ from '../../assets/icons/Sidebar/FAQ.svg'
import Logout from '../../assets/icons/Sidebar/Logout.svg'
import News from '../../assets/icons/Sidebar/News.svg'
import Settings from '../../assets/icons/Sidebar/Settings.svg'
import Wallet from '../../assets/icons/Sidebar/Wallet.svg'
import Profile from '../../assets/icons/Sidebar/Profile.svg'
import full from '../../assets/img/estrellaLlena.png'
import RateForm from './RateForm'
import { openRate } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


export default function Nav () {

  const dispatch = useDispatch()
  const showRate = useSelector(state => state.showRate)
  const movements = useSelector(state => state.movements)
  console.log(movements.movements?.length)

  const [perilla, setPerilla] = useState(false)

  useEffect(()=>{
    if ( movements.movements?.length === 1 ) {
      setPerilla(true)
    }
  },[])

  function logOut () {
    window.localStorage.setItem("token", "")
  }
  function openRateclick() {
    // dispatch(openRate(true))
    setPerilla(!perilla)
    // alert("entrando")
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
          <li onClick={openRateclick} className={style.listItem}>
            <img src={full} alt='Rate' className={style.icon}/><span className={style.listItem_text}>Rate us!</span>
          </li>
          {/* {
            (function show () {
            if ( movements.movements?.length === 25 || showRate ) {
              dispatch(openRate(true))
              return <RateForm/>
            }})()
          } */}
          {
            perilla ?
            <RateForm setPerilla={setPerilla}/> :
            null
          }
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
