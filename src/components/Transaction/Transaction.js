/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovements, getUser } from '../../redux/actions'
import { TRANSFER_MONEY } from '../../services/TRANSFER_MONEY'
import Button from '../uiComponents/Button'
import InputComponent from '../uiComponents/InputComponent'
import { useForm } from 'react-hook-form'
import { CardText } from '../Profile/Profile'
import { useNavigate } from 'react-router-dom'

const categoryArray = ['Other', 'Groceries', 'Selfcare', 'Services', 'Shopping', 'Subscriptions', 'Transport', 'Travels']

export default function Transaction ({ cvuFav, setCvuFav }) {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const navigate = useNavigate()


  const [state, setState] = useState({
    currency: "Pesos",
    operation: "Debit",
    cvuMain: userData?.accounts?.[0]?.cvu,
  })

  useEffect(() => {
    dispatch(getUser(window.localStorage.getItem('token'))).then(

      r => {
        console.log(r);
        // setState({ ...state, cvuMain: r.payload.accounts[0].cvu })
      })
  }, [])

  console.log(userData);

  function onSubmit (data) {
    TRANSFER_MONEY({ ...data, ...state, cvuD: cvuFav || data.cvuD, amount: Number(data.amount) }).then((res) => {
      if (res?.newMovement) {
        alert('The transaction was successful')
        dispatch(getMovements(userData.accounts[0].cvu))
        setCvuFav(null)
        reset()
      }
    }).catch(console.error)
  }

  function cleanFav () {
    setCvuFav(null)
  }

  return (
    <>
      <form class="bg-white w-fullscreen shadow-xl rounded-b-md px-8 pt-6 pb-8 mb-4 dark:bg-slate-900" onSubmit={handleSubmit(onSubmit)}>
        {
          cvuFav && <CardText onClick={() => cleanFav()} labeltext='Destiny CVU' >{cvuFav}</CardText>
        }

        {
          !cvuFav && <InputComponent labeltext='Destiny CVU' errors={errors} register={register} msgerror="This field is required and must have a length of at least 8 characters." placeholder='Where do yo want to transfer to?' type='number' name='cvuD' min={0} config={{ required: true, minLength: 8 }} />
        }
        <InputComponent labeltext='Amount' errors={errors} register={register} msgerror="This field is required." placeholder='How much do you want to send?' type='number' name='amount' min={0} config={{ required: true, min: 1 }} />
        <label className="flex flex-wrap w-full uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='category'>Category</label>
        <select className="flex flex-wrap mb-6 w-full border rounded-md" name="category" {...register("category", { require: true })}>
          {
            categoryArray?.map(categoryName => (
              <option value={categoryName}>{categoryName}</option>
            ))
          }
        </select>
        <InputComponent labeltext='Comment' errors={errors} register={register} msgerror="This field is required" placeholder='Do you want to commment your transaction?' type='text' name='comment' config={{ required: false }} />
        {userData?.accounts?.[0]?.cvu && <Button type='submit'>Send your transference</Button>}
        <Button onClick={() => navigate('/charge')}>
          Charge Account
        </Button>
      </form>
      <div>

      </div>
    </>
  )
}