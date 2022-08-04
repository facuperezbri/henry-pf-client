/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, getMovements, getUser } from '../../redux/actions'
import { TRANSFER_MONEY } from '../../services/TRANSFER_MONEY'
import Button from '../uiComponents/Button'
import InputComponent from '../uiComponents/InputComponent'
import { useForm } from 'react-hook-form'
import { CardText } from '../Profile/Profile'


const categoryArray = ['Other', 'Groceries', 'Selfcare', 'Services', 'Shopping', 'Subscriptions', 'Transport', 'Travels']

export default function Transaction ({ cvuFav }) {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()


  const [state, setState] = useState({
    currency: "Pesos",
    operation: "Debit",
    cvuMain: '',
    category: 'Other'
  })

  useEffect(() => {
    dispatch(getUser(window.localStorage.getItem('token'))).then(r => {

      dispatch(getMovements(r.payload.accounts[0].cvu))
      setState({ ...state, cvuMain: r.payload.accounts[0].cvu })
    })
    dispatch(getCategory())
  }, [])

  function onSubmit (data) {
    console.log({ ...data, ...state, amount: Number(data.amount) })

    TRANSFER_MONEY({ ...data, ...state, cvuD: cvuFav || data.cvuD, amount: Number(data.amount) }).then((res) => {
      if (res?.newMovement) {
        alert('The transaction was successful')
        dispatch(getMovements(userData.accounts[0].cvu))
        reset()
      }
    }).catch(console.error)
  }

  return (
    <>
      <form class="bg-white w-10/12 shadow-xl rounded-b-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        {/* <InputComponent labeltext='Destiny CVU' errors={errors} register={register} msgerror="This field is required and must have a length of at least 8 characters." placeholder='Where do yo want to transfer to?' type='number' name='cvuD' min={0} config={{ required: true, minLength: 8 }} /> */}
        {
          cvuFav && <CardText>{cvuFav}</CardText>
        }

        {
          !cvuFav && <InputComponent labeltext='Destiny CVU' errors={errors} register={register} msgerror="This field is required and must have a length of at least 8 characters." placeholder='Where do yo want to transfer to?' type='number' name='cvuD' min={0} config={{ required: true, minLength: 8 }} />
        }
        <InputComponent labeltext='Amount' errors={errors} register={register} msgerror="This field is required." placeholder='How much do you want to send?' type='number' name='amount' min={0} config={{ required: true, min: 1 }} />
        <label className="flex flex-wrap w-full uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='category'>Category</label>
        <select className="flex flex-wrap mb-6 w-full border rounded-md" name='category' {...register('category', { require: true })}>
          {
            categoryArray?.map(categoryName => (
              <option value={categoryName} selected={categoryName === 'Other'}>{categoryName}</option>
            ))
          }
        </select>
        <InputComponent labeltext='Comment' errors={errors} register={register} msgerror="This field is required" placeholder='Do you want to commment your transaction?' type='text' name='comment' config={{ required: false }} />
        <Button type='submit'>Send your transference</Button>
      </form>
    </>


  )
}