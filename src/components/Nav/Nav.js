import React, { useEffect, useState } from 'react'
import style from './Nav.module.css'
import { Link } from "react-router-dom"

import { MdOutlineSpaceDashboard, MdExitToApp } from 'react-icons/md'
import { FiHelpCircle } from 'react-icons/fi'
import Logout from '../../assets/icons/Sidebar/Logout.svg'
import { IoNewspaperOutline, IoSettingsOutline } from 'react-icons/io5'
import { BsWallet2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineStar } from 'react-icons/ai'
import { BiCoinStack } from 'react-icons/bi'
import {MdOutlineAdminPanelSettings} from 'react-icons/md'

 import { useDispatch, useSelector } from 'react-redux'

import {RiTeamLine} from 'react-icons/ri'



export default function Nav () {

   const movements = useSelector(state => state.userData)

  //  useEffect(() => {
  //    if (movements.movements?.length === 1) {
  //      setPerilla(true)
  //    }
  //  }, [])

  function logOut () {
    window.localStorage.setItem("token", "")
  }
  // function openRateclick () {
  //   // dispatch(openRate(true))
  //   setPerilla(!perilla)
  //   // alert("entrando")
  // }
  return (
    <nav className={style.header}>
      <div>
        <h3 className={style.title}>wallet.</h3>
        <ul className={style.itemsNav}>
          { movements?.isAdmin &&
            <Link to='/dashboard/admin'>
              <li className={style.listItem}>
                <MdOutlineAdminPanelSettings className={style.icon} /> <span className={style.listItem_text}>Admin</span>
              </li>
            </Link>
          }
          <Link to='/profile'>
            <li className={style.listItem}>
              <CgProfile className={style.icon} /> <span className={style.listItem_text}>Profile</span>
            </li>
          </Link>
          <Link to='/home'>
            <li className={style.listItem}>
              <MdOutlineSpaceDashboard className={style.icon} /> <span className={style.listItem_text}>Dashboard</span>
            </li>
          </Link>
          <Link to='/wallet'>
            <li className={style.listItem}>
              <BsWallet2 className={style.icon} /><span className={style.listItem_text}>Wallet</span>
            </li>
          </Link>
          <Link to='/news'>
            <li className={style.listItem}>
              <IoNewspaperOutline className={style.icon} /> <span className={style.listItem_text}>News</span>
            </li>
          </Link>
          <Link to='/cryptosmarket'>
            <li className={style.listItem}>
              <BiCoinStack className={style.icon} /><span className={style.listItem_text}>Cryptos</span>
            </li>
          </Link>
          { (!movements?.ratings) ?
          <Link to='/rateform'>
          <li  className={style.listItem}>
            <AiOutlineStar className={style.icon} /><span className={style.listItem_text}>Rate app</span>
          </li>
          </Link> : null
          }
        </ul>
      </div>
      <ul className={style.itemsNav}>
      <Link to="/aboutus">
          <li className={style.listItem}>
            <RiTeamLine className={style.icon} /> <span className={style.listItem_text}>About us</span>
          </li>
        </Link>
        <Link to="/">
          <li onClick={() => logOut()} className={style.listItem}>
            <MdExitToApp className={style.icon} /> <span className={style.listItem_text}>Log out</span>
          </li>
        </Link>
      </ul>
    </nav>
  )
}
