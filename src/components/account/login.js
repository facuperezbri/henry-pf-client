import { useForm } from 'react-hook-form'
import { LOG_IN } from '../../services/LOG_IN'
import formStyles from './form.module.css'
import { LoginWithGoogle } from '../../firebase_/client'
import { useNavigate } from 'react-router-dom'

import logoGoogle from '../../assets/icons/googleLogo.svg'
import { useToken } from '../../hooks/useToken'


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const loginResponseHandler = (res) => {
    if (res?.token && res?.isAdmin) {
      setToken(res?.token)
      navigate('/dashboard/admin')
      return
    }
    if (res?.token) {
      setToken(res?.token)
      navigate('/home')
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
        loginResponseHandler(res)
      }).catch(console.error)

    }).catch(console.error)
  }
  return (
    <div className={`${formStyles.center} ${formStyles.min_h_100vh}`}>

      <div className={formStyles.card}>
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
          <div className={formStyles.input_container}>
            <input className={formStyles.input_text} defaultValue="" placeholder='email' {...register('email', { required: true, minLength: 8 })} />
            {errors.email && <span className={formStyles.input_error}>This field is required</span>}
          </div>
          <div className={formStyles.input_container}>
            <input className={formStyles.input_text} defaultValue="" placeholder='password' {...register('password', { required: true, minLength: 8 })} />
            {errors.password && <span className={formStyles.input_error}>his field is required</span>}
          </div>
          <div className={formStyles.center}>
            <button className={`${formStyles.button} ${formStyles.button_submit}`} type='submit'>Log in</button>
          </div>
        </form>
        <div className={formStyles.center}>
          <button className={`${formStyles.button} ${formStyles.button_google}`} onClick={login}>Login with <img src={logoGoogle} alt='Google logo' /></button>
        </div>
      </div>

    </div>
  )
}

export default Login
