/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCategory, getMovements, getUser } from '../../redux/actions'
import style from './transaction.module.css'
import { TRANSFER_MONEY } from '../../services/TRANSFER_MONEY'
import Button from '../uiComponents/Button'
import InputComponent from '../uiComponents/InputComponent'
import { useForm } from 'react-hook-form'


export default function Transaction () {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [amount, setAmount] = useState(0)
  const [state, setState] = useState({
    currency: "Pesos",
    operation: "Debit",
    cvuMain: ''
  })

  useEffect(() => {
    dispatch(getUser(window.localStorage.getItem('token'))).then(r => {

      dispatch(getMovements(r.payload.accounts[0].cvu))
      setState({ ...state, cvuMain: r.payload.accounts[0].cvu })
    })
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

  // function handleSubmit (e) {
  //   e.preventDefault()
  //   TRANSFER_MONEY({ ...state, amount: amount }).then((res) => {
  //     console.log(res)
  //     dispatch(getMovements(userData.accounts[0].cvu))
  //   }).catch(console.error)
  //   setState({
  //     cvuMain: userData?.accounts?.[0].cvu || "",
  //     currency: "Pesos",
  //     operation: "Debit",
  //     comment: "",
  //     cvuD: ""
  //   })
  //   setAmount(0)

  // }

  function onSubmit (data) {
    console.log({ ...data, ...state, amount: Number(data.amount) });
    return
    // TRANSFER_MONEY({ ...data, ...state, amount: Number(data.amount) }).then((res) => {
    //   console.log(res)
    //   dispatch(getMovements(userData.accounts[0].cvu))
    // }).catch(console.error)
  }

  return (
    // <div className={style.container}>
    //   <div className={style.elementsContainer}>
    //     <div className={style.transactionsContainer}>
    //       <div>
    //         <h2>Transaction</h2>
    //         <form onSubmit={handleSubmit} className={style.formContainer}>

    //           <label htmlFor="cvuMain">Your CVU: </label>
    //           <input name='cvuMain' value={state.cvuMain} disabled />

    //           <label htmlFor="cvuD">Destiny CVU: </label>
    //           <input name='cvuD' type="text" value={state.cvuD} onChange={handleChange} placeholder="Where do yo want to transfer to?" />

    //           <label htmlFor="amount">Amount: </label>
    //           <input name='amount' type='number' min={0} value={amount} onChange={handleChange} placeholder="How much do you want to send?" />

    //           <label htmlFor="category">Category: </label>
    //           <select name='category' onChange={handleChange}>
    //             <option selected="true" disabled="disabled">Choose a category...</option>
    //             <option value='Charge'>Charge</option>
    //             <option value='Entertainment'>Entertainment</option>
    //             <option value='Groceries'>Groceries</option>
    //             <option value='Selfcare'>Selfcare</option>
    //             <option value='Services'>Services</option>
    //             <option value='Shopping'>Shopping</option>
    //             <option value='Subscriptions'>Subscriptions</option>
    //             <option value='Transport'>Transport</option>
    //             <option value='Travels'>Travels</option>
    //           </select>

    //           <label htmlFor='comment'>Comment:</label>
    //           <textarea name='comment' value={state.comment} onChange={handleChange}></textarea>
    //           <Button children='Send transference' />
    //           <button className={style.btn} onClick={handleSubmit}>Send transference</button>
    //         </form>
    //         <div>
    //         </div>
    //         <button onClick={() => navigate('/charge')}>
    //           Charge Account
    //         </button></div>
    //     </div>
    //   </div>
    // </div>

    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent errors={errors} register={register} type='number' name='cvuD' config={{ required: true, minLength: 8 }} />
        <InputComponent errors={errors} register={register} type='number' name='amount' config={{ required: true, minLength: 8 }} />
        <button>Send</button>
      </form>
    </>


  )
}