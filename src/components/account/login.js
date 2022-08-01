import { useForm } from 'react-hook-form'
import { LOG_IN } from '../../services/LOG_IN'
import formStyles from './form.module.css'
import { LoginWithGoogle } from '../../firebase_/client'
import { useNavigate } from 'react-router-dom'

import { useToken } from '../../hooks/useToken'


import { AiOutlineGoogle } from 'react-icons/ai'


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const loginResponseHandler = (res) => {
    if (res?.token && res?.isAdmin) {
      setToken(res?.token)
      navigate('/dashboard/admin')
      console.log(res.token)
      return
    }
    if (res?.token) {
      setToken(res?.token)
      navigate('/home')
      console.log(res.token)
    }
  }
  const { setToken } = useToken()
  const onSubmit = async ({ email, password }) => {
    LOG_IN({ email, password }).then((res) => {
      loginResponseHandler(res)
    }).catch(console.error)
  }
  const login = () => {
    LoginWithGoogle().then(({ user }) => {
      LOG_IN({ googleID: user.uid }).then((res) => {
        if (res.message) {
          alert(res.message)
        }
        loginResponseHandler(res)
      }).catch(console.error)

    }).catch(console.error)
  }
  return (
    <div className={formStyles.mainContainer}>
      <h4 className={formStyles.createStart}>Welcome back.</h4>
      <h2>Already a member<span>?</span></h2>

      <div className={formStyles.card}>
        <button className={`${formStyles.button} ${formStyles.button_google}`} onClick={login}><AiOutlineGoogle size={35} /> Log in with Google</button>
        <div className={formStyles.or}>or</div>
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
          <div className={formStyles.input_container}>
            <input className={formStyles.input_text} defaultValue="" placeholder='email' {...register('email', { required: true, minLength: 8 })} />
            {errors.email && <span className={formStyles.input_error}>This field is required.</span>}
          </div>
          <div className={formStyles.input_container}>
            <input className={formStyles.input_text} defaultValue="" placeholder='password' {...register('password', { required: true, minLength: 8 })} />
            {errors.password && <span className={formStyles.input_error}>This field is required.</span>}
          </div>
          <button className={`${formStyles.button} ${formStyles.button_submit}`} type='submit'>Log in</button>
        </form>

      </div>


    </div>
  )
}

export default Login
