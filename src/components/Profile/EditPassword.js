import React,{useState} from 'react'
import style from './EditPassword.module.css'
import axios from "axios"
import { useToken } from '../../hooks/useToken'
import InputComponent from '../uiComponents/Input'
import { useForm } from 'react-hook-form'
import Button from '../uiComponents/Button'
import { API_URL } from '../../services/API'
const UPDATE_PASSWORD = async ({ newPassword, oldPassword }) => {
    const { token } = useToken()
    try {
        const res = await fetch(`${API_URL}/api/user/changePassword`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({ newPassword, oldPassword })
        })
        const resJson = res.json()
        return resJson
    } catch (error) {
        console.error(error)
    }
}

export default function EditPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    if (data.newPassword !== data.newPasswordVerify) {
        return alert('Password must be equals.')
    }
    UPDATE_PASSWORD({ newPassword: data.newPassword, oldPassword: data.oldPassword }).then(res => {
        if (res?.error) {
            return alert(res?.error)
        }
        if (res?.message) {
            alert(res?.message)
        }
    }).catch(console.log)
  }


  return (
    <div> 
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent register={register} errors={errors} msgerror='This field is rquired.' name='oldPassword' placeholder='Your old password' type='password' config={{ required: true, minLength: 8 }} />

          <InputComponent register={register} errors={errors} msgerror='This field is rquired.' name='newPassword' placeholder='Your new password' type='password' config={{ required: true, minLength: 8 }} />
          <InputComponent register={register} errors={errors} msgerror='This field is rquired.' name='newPasswordVerify' placeholder='Repeat your new password' type='password' config={{ required: true, minLength: 8 }} />

          <div className="grid place-content-center mt-4">
            <Button>Send</Button>
          </div>
      </form>
      </div> 
    </div>
  )
}
