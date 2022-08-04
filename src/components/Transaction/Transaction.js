/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, getMovements, getUser } from '../../redux/actions'
import { TRANSFER_MONEY } from '../../services/TRANSFER_MONEY'
import Button from '../uiComponents/Button'
import InputComponent from '../uiComponents/InputComponent'
import { useForm } from 'react-hook-form'

const categoryArray = [ 'Other','Groceries', 'Selfcare', 'Services', 'Shopping', 'Subscriptions', 'Transport', 'Travels']

export default function Transaction() {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

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

  function onSubmit(data) {
    console.log({ ...data, ...state, amount: Number(data.amount) })

    TRANSFER_MONEY({ ...data, ...state, amount: Number(data.amount) }).then((res) => {
      if (res?.newMovement) {
        alert('The transaction was successful')
        dispatch(getMovements(userData.accounts[0].cvu))
        reset()
      }
    }).catch(console.error)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent errors={errors} register={register} msgerror="This field is required" placeholder='Where do yo want to transfer to?' type='number' name='cvuD' config={{ required: true, minLength: 8 }} />
        <InputComponent errors={errors} register={register} msgerror="This field is required" placeholder='How much do you want to send?' type='number' name='amount' config={{ required: true, min: 1 }} />
        <select {...register('category' , { require: true }) }>
          {
            categoryArray?.map(categoryName => (
              <option value={categoryName} selected={categoryName === 'Other'}>{categoryName}</option>
            ))
          }
        </select>
        <InputComponent errors={errors} register={register} msgerror="This field is required" placeholder='Where do yo want to transfer to?' type='text' name='comment' config={{ required: false }} />
        <Button type='submit'>Send</Button>
      </form>
    </>


  )
}