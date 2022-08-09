import { useForm } from 'react-hook-form'
import { LOG_IN } from '../../services/LOG_IN'
import formStyles from './form.module.css'
import { LoginWithGoogle } from '../../firebase_/client'
import { useNavigate } from 'react-router-dom'

import { useToken } from '../../hooks/useToken'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineGoogle } from 'react-icons/ai'

import InputComponent from './../uiComponents/InputComponent'
import SendMail from './SendMail'
import ButtonWithLoader from '../uiComponents/ButtonWithLoader'
import useNotification from '../uiComponents/useNotification'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { error: loginErrror } = useNotification()
  const [open, setOpen] = useState(false)
  const [isLoadingLoginWithGoogle, setIsLoadingLoginWithGoogle] = useState(false)
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)


  const loginResponseHandler = (res) => {
    if (res?.token && res?.isAdmin) {
      setToken(res?.token)
      return navigate('/dashboard/admin')
    }
    if (res?.token) {
      setToken(res?.token)
      navigate('/home')
    }
  }
  const change = (e) => {
    e.preventDefault()
    setOpen(!open)
  }
  const { setToken } = useToken()
  const onSubmit = async ({ email, password }) => {
    setIsLoadingLogin(true)
    LOG_IN({ email, password }).then((res) => {

      if (res?.error) return loginErrror(res?.error)

      loginResponseHandler(res)
    })
      .catch((error) => {
        console.error(error)
        loginErrror()
      })
      .finally(() => setIsLoadingLogin(false))
  }

  const handlerLoginWithGoogle = () => {
    setIsLoadingLoginWithGoogle(true)
    LoginWithGoogle().then(({ user }) => {
      LOG_IN({ googleID: user.uid }).then((res) => {
        if (res?.error) return loginErrror(res?.error)
        loginResponseHandler(res)
      }).catch((error) => {
        console.error(error)
        loginErrror()
      }).finally(() => setIsLoadingLoginWithGoogle(false))

    }).catch((error) => {
      console.error(error)
      loginErrror()
    }).finally(() => setIsLoadingLoginWithGoogle(false))
  }
  return (
    <div className={formStyles.mainContainer}>
      <h4 className={formStyles.createStart}>Welcome back.</h4>
      <h2>Already a member<span>?</span></h2>

      <ToastContainer />
      <div className={formStyles.card}>
        <ButtonWithLoader isLoading={isLoadingLoginWithGoogle} className='w-full' onClick={handlerLoginWithGoogle}>
          <div className='flex gap-4'>
            <AiOutlineGoogle size={35} /><span className='grid place-content-center'>Log in with Google</span>
          </div>
        </ButtonWithLoader>


        <div className={formStyles.or}>or</div>

        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>

          <InputComponent register={register} errors={errors} name='email' placeholder='Your email' type='email' config={{ required: true, minLength: 8 }} />

          <InputComponent register={register} errors={errors} name='password' placeholder='Your password' type='password' config={{ required: true, minLength: 8 }} />

          {/* <button className={`${formStyles.button} ${formStyles.button_submit}`} type='submit'>Log in</button> */}
          <ButtonWithLoader isLoading={isLoadingLogin} className='w-full' type='submit'>
            Log in
          </ButtonWithLoader>
        </form>

        <p onClick={(e) => change(e)} className={formStyles.a}>Did you forget your password? get it back</p>
        {open && <SendMail />}

      </div>
    </div>
  )
}

export default Login
