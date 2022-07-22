import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Favorites from '../../components/Favourites/Favourites'

import { getCategory, getMovements, getUser } from '../../redux/actions'

import Nav from '../../components/Nav/Nav'

import style from './Wallet.module.css'
import { set } from 'react-hook-form'


export default function Wallet () {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  // const movements = useSelector(state => state.movements)
  const [amount, setAmount] = useState(0)
  const [state, setState] = useState({
    cvuMain: userData.length === 0 ? 0 : userData.accounts[0].cvu,
    currency: "pesos",
    operation: "Debit",
  })

  useEffect(() => {
    dispatch(getUser(window.localStorage.getItem('token'))).then(r => dispatch(getMovements(r.payload.accounts[0].cvu)))
    dispatch(getCategory())
  }, [])


  function handleChange (e) {
    e.preventDefault()
    if (e.target.name !== 'amount') {
      setState({
        ...state, [e.target.name]: e.target.value
      })
    }

    if (e.target.name === 'amount') {
      setAmount(parseInt(e.target.value, 10))
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    axios.post('http://localhost:4000/api/movement/make_a_movement/', { ...state, amount: amount })
  }
  return (
    <div className={style.container}>
      <Nav />

      <div className={style.transactionsContainer}>
        <h2>Transaction</h2>
        <NavLink exact to="/cryptosmarket" >
          <button className={style.buttonToCrypto}>Cryptos Market</button>
        </NavLink>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cvuMain">Your CVU: </label>
          <input name='cvuMain' value={userData.length === 0 ? 0 : userData.accounts[0].cvu} disabled />
          <label htmlFor="cvuD">Destiny CVU: </label>
          <input name='cvuD' type="text" onChange={handleChange} />
          <label htmlFor="amount">Amount: </label>
          <input name='amount' type='number' onChange={handleChange} />
          <label htmlFor="category">Category: </label>
          <input name='category' type='text' onChange={handleChange} />
          {/* <select>
            {movements?.map((m, index) => {
              return (
                <option key={index} value={m}>{m}</option>
              )
            })}
          </select> */}
          <button>Send transference</button>
        </form>
      </div>
      <div>
        <Favorites/>
      </div>
    </div >
  )
}
