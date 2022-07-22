import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginWithGoogle } from '../../firebase_/client'
import { useNavigate } from 'react-router-dom'
import { SIGN_IN } from '../../services/SIGN_IN'
import formStyles from './form.module.css'

const SignIn = () => {
  const navigate = useNavigate()

  const [userGoogle, setUserGoogle] = useState()

  const [FilesNames, setFilesNames] = useState({ photoDNIReverse: '', photoDNIFront: '' })

  const [step, setStep] = useState(1)

  const { register, handleSubmit, formState: { errors } } = useForm()
  const MAX_STEPS = 3

  const onSubmit = (data) => {
    if (data.password !== data.passwordVerify) {
      return alert('Passwords must be the same')
    }
    const dataTosend = {
      ...data,
      email: userGoogle.email || data.email,
      profilepic: userGoogle.photoURL || '',
      username: userGoogle?.email?.split('@')[0] || data.username,
      googleID: userGoogle?.uid
    }
    console.log(dataTosend)
    SIGN_IN(dataTosend).then(res => res?.id && navigate('/account/login')).catch(console.error)
  }

  const login = () => {
    LoginWithGoogle().then(({ user }) => {
      setUserGoogle(user)
    }).catch(console.error)
  }

  const onInputFileOne = (e) => {
    if (e?.target?.files) {
      const file = e?.target?.files[0]
      setFilesNames({ ...FilesNames, [e?.target?.name]: file?.name })
      const reader = new FileReader()
      file && reader.readAsDataURL(file)

      const preview = document.querySelector(`#preview_img_${e?.target?.name}`)
      console.log({ preview }, `#preview_img_${e?.target?.name}`)
      const image = document.createElement('img')
      preview && (preview.innerHTML = '')
      reader.onload = () => {
        image.src = reader.result ? reader.result.toString() : ''
        preview && preview.append(image)
      }
    }
  }

  return (
    <div className={`${formStyles.center} ${formStyles.min_h_100vh}`}>
      <div className={formStyles.steps_index}>
        <div style={{ backgroundColor: step >= 1 && 'greenyellow' }}></div>
        <div style={{ backgroundColor: step >= 2 && 'greenyellow' }}></div>
        <div style={{ backgroundColor: step >= 3 && 'greenyellow' }}></div>
      </div>
      <div className={formStyles.card}>
        <div>
          {
            userGoogle && <button className={formStyles.button} onClick={() => setUserGoogle()}>X</button>
          }
          {
            !userGoogle && step === 1 &&
            <div className={formStyles.center}>
              <button className={`${formStyles.button} ${formStyles.button_google}`} onClick={login}>Login with Google</button>
            </div>
          }
          {
            userGoogle?.photoURL &&
            <div className={formStyles.center}>
              <img className={formStyles.profilepic} src={userGoogle?.photoURL} alt={userGoogle?.displayName} />
            </div>
          }
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
          {
            step === 1 &&
            <>
              {
                !userGoogle?.email &&
                <div className={formStyles.input_container}>
                  <input className={formStyles.input_text} defaultValue="" placeholder='email' {...register('email', { required: true, minLength: 8 })} />
                  {errors.email && <span className={formStyles.input_error}>This field is required</span>}
                </div>
              }
              {
                userGoogle?.email && <span> {userGoogle.email} </span>
              }

              <div className={formStyles.input_container}>
                <input className={formStyles.input_text} defaultValue="" placeholder='password' {...register('password', { required: true, minLength: 8 })} />
                {errors.password && <span className={formStyles.input_error}>his field is required</span>}
              </div>
              <div className={formStyles.input_container}>
                <input className={formStyles.input_text} defaultValue="" placeholder='password' {...register('passwordVerify', { required: true, minLength: 8 })} />
                {errors.passwordVerify && <span className={formStyles.input_error}>This field is required</span>}
              </div>
            </>
          }

          {
            step === 2 &&
            <>
              {
                userGoogle?.email.split('@')[0] && <span> {userGoogle.email.split('@')[0]} </span>
              }

              {
                !userGoogle?.displayName &&
                <div className={formStyles.input_container}>
                  <input className={formStyles.input_text} defaultValue="" placeholder='username' {...register('username', { required: true, minLength: 6 })} />
                  {errors.name && <span className={formStyles.input_error}>This field is required</span>}
                </div>
              }

              <div className={formStyles.input_container}>
                <input className={formStyles.input_text} defaultValue="" placeholder='your name' {...register('name', { required: true, minLength: 3 })} />
                {errors.name && <span className={formStyles.input_error}>This field is required</span>}
              </div>

              <div className={formStyles.input_container}>
                <input className={formStyles.input_text} defaultValue="" placeholder='your lastname' {...register('lastname', { required: true, minLength: 1 })} />
                {errors.lastname && <span className={formStyles.input_error}>This field is required</span>}
              </div>
            </>
          }

          {
            step === 3 &&
            <>
              <div className={formStyles.input_container}>
                <input className={formStyles.input_text} defaultValue="" type="number" placeholder='Your DNI' {...register('DNI', { required: true, minLength: 7, maxLength: 9 })} />
                {errors.lastname && <span className={formStyles.input_error}>This field is required</span>}
              </div>

              <div className={formStyles.input_container}>
                <input type="file" onInput={onInputFileOne} {...register('photoDNIFront', { required: true })} />
                {errors.photoDNIFront && <span className={formStyles.input_error}>This field is required</span>}
              </div>
              <div id='preview_img_photoDNIFront' className={formStyles.image_preview}>
              </div>

              <div className={formStyles.input_container}>
                <input type="file" name='file-1' onInput={onInputFileOne} className={formStyles.input_file} {...register('photoDNIReverse', { required: true })} />
                {errors.photoDNIReverse && <span className={formStyles.input_error}>This field is required</span>}
              </div>
              <div id='preview_img_photoDNIReverse' className={formStyles.image_preview}>
              </div>

              <div className={formStyles.center}>
                <button className={`${formStyles.button} ${formStyles.button_submit}`} type='submit'>Submit</button>
              </div>
            </>
          }

        </form>
        <div className={formStyles.center}>
          <div className={formStyles.button_prev_next_container}>
            {
              step > 1 && <button className={formStyles.button} onClick={() => step !== 1 && setStep((prevStep) => prevStep - 1)}>Previus</button>
            }
            {
              step !== MAX_STEPS && <button className={formStyles.button} onClick={() => step <= MAX_STEPS && setStep((prevStep) => prevStep + 1)}>Next</button>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignIn
