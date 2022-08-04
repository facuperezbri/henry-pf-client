import React, { useState } from 'react'
import axios from 'axios';
import style from './EditImg.module.css'
import { useForm } from 'react-hook-form'
import { UPDATE_PROFILE_IMAGE } from '../../services/UPDATE_PROFILE_IMAGE';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions'
import { useToken } from '../../hooks/useToken'
import InputComponent from '../uiComponents/Input';
import Button from '../uiComponents/Button';

export default function EditImg({ dataProfile, handlerCloseModalImg }) {
  const dispatch = useDispatch()
  const { token } = useToken()
  const { register, handleSubmit, formState: { errors } } = useForm()
  // console.log(setVisibleImg)

  const onSubmit = (data) => {
    UPDATE_PROFILE_IMAGE(data.image[0], dataProfile?.profilepicID).then((res) => {
      dispatch(getUser(token))
      handlerCloseModalImg()
    }).catch(console.error)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent register={register} errors={errors} msgerror='This field is rquired.' name='image' type='file' config={{ required: true }} />
        <div className='grid place-content-center'>
          <Button type='submit'>
            <span className='text-primary-red'>
              Send
            </span>
          </Button>
        </div>
      </form>
    </div>
  )
}

