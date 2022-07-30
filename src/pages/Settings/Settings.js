import React from 'react'
import Nav from '../../components/Nav/Nav'
import style from './Settings.module.css'
import { useNavigate } from 'react-router-dom'

export default function MoreOptions () {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <Nav />
      <div>
        <button onClick={() => navigate('/charge')}>
          Charge Account
        </button>
      </div>
    </div>
  )
}
