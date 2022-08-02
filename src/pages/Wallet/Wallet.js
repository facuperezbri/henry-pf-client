import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Favorites from '../../components/Favourites/Favourites'

import { getCategory, getMovements, getUser, openRate } from '../../redux/actions'

import Nav from '../../components/Nav/Nav'

import style from './Wallet.module.css'
import { TRANSFER_MONEY } from '../../services/TRANSFER_MONEY'
import RateForm from '../../components/Nav/RateForm'


export default function Wallet () {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  const navigate = useNavigate()
  // const movements = useSelector(state => state.movements)
  const [amount, setAmount] = useState(0)
  // userData?.length > 0 ? userData.accounts[0].cvu : ""
  const [state, setState] = useState({
    cvuMain: userData.accounts?.[0].cvu || "",
    currency: "Pesos",
    operation: "Debit",
    comment: ""
  })
  console.log(state.cvuMain)
  useEffect(() => {
    dispatch(getUser(window.localStorage.getItem('token'))).then(r => dispatch(getMovements(r.payload.accounts[0].cvu)))
    dispatch(getCategory())
  }, [dispatch])


  // console.log(userData?.accounts[0]?.movements)

  // const theMoves = userData?.accounts[0]?.movements?.map((abc) => (
  //   abc?.categories?.name
  // ))
  // // console.log(theMoves)


  // const catUnique = [...new Set(theMoves)]
  // // console.log(catUnique)



  function handleChange (e) {
    e.preventDefault()
    setState({...state, cvuMain: userData.accounts?.[0].cvu})
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
    TRANSFER_MONEY({ ...state, amount: amount }).then((res) => {
      console.log(res)
      dispatch(getMovements(userData.accounts[0].cvu))
    }).catch(console.error)
    setState({
      cvuMain: userData?.accounts?.[0].cvu || "",
      currency: "Pesos",
      operation: "Debit",
      comment: "",
      cvuD: ""
    })
    setAmount(0)
    
  }

  return (
    <div className={style.container}>
      <Nav />
      <div className={style.elementsContainer}>
        <div className={style.transactionsContainer}>
          <div>
            <h2>Transaction</h2>
            {/* <NavLink exact to="/cryptosmarket" >
          <button className={style.buttonToCrypto}>Cryptos Market</button>
        </NavLink> */}
            <form onSubmit={handleSubmit} className={style.formContainer}>

              <label htmlFor="cvuMain">Your CVU: </label>
              <input name='cvuMain' value={state.cvuMain} disabled />

              <label htmlFor="cvuD">Destiny CVU: </label>
              <input name='cvuD' type="text" value={state.cvuD} onChange={handleChange} placeholder="Where do yo want to transfer to?" />

              <label htmlFor="amount">Amount: </label>
              <input name='amount' type='number' min={0} value={amount} onChange={handleChange} placeholder="How much do you want to send?" />

              <label htmlFor="category">Category: </label>
              {/* <input name='category' type='text' onChange={handleChange} /> */}

              <select name='category' onChange={handleChange}>
                <option selected="true" disabled="disabled">Choose a category...</option>
                {/* {
                  catUnique.map((abc, i) => (
                    <option key={i} value={abc}>{abc}</option>
                    ))
                } */}
                <option value='Charge'>Charge</option>
                <option value='Entertainment'>Entertainment</option>
                <option value='Groceries'>Groceries</option>
                <option value='Selfcare'>Selfcare</option>
                <option value='Services'>Services</option>
                <option value='Shopping'>Shopping</option>
                <option value='Subscriptions'>Subscriptions</option>
                <option value='Transport'>Transport</option>
                <option value='Travels'>Travels</option>
              </select>

              <label htmlFor='comment'>Comment:</label>
              <textarea name='comment' value={state.comment} onChange={handleChange}></textarea>

              <button className={style.btn} onClick={handleSubmit}>Send transference</button>
            </form>
            <div>


            </div>
            <button onClick={() => navigate('/charge')}>
              Charge Account
            </button></div>
        </div>
      </div>

      <div>
        <Favorites setState={setState} state={state} />
        {/* {
            (function abc ()  {
              if (ifMoves === 25) {
              dispatch(openRate(true))
              return <RateForm abc={abc}/>
              } else {
              return null
              }
            })()
          } */}


      </div>
    </div>
  )
}
