import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginWithGoogle } from '../../firebase_/client'
import { SIGN_IN } from '../../services/SIGN_IN'
import formStyles from './form.module.css'

import { AiOutlineGoogle } from 'react-icons/ai'

import InputComponent from './../uiComponents/InputComponent'


const SignIn = () => {
  const [userGoogle, setUserGoogle] = useState()

  const [step, setStep] = useState(1)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const login = () => {
    LoginWithGoogle().then(({ user }) => {
      setUserGoogle(user)
    }).catch(console.error)
  }

  const onSubmit = (data) => {
    if (data?.password !== data?.passwordVerify) {
      return alert('Passwords must be the same')
    }
    if (data && step !== 3) {
      setStep((prevStep) => prevStep + 1)
    }

    if (step === 3) {
      const dataTosend = {
        ...data,
        email: userGoogle?.email || data?.email,
        profilepic: userGoogle?.photoURL || '',
        username: userGoogle?.email?.split('@')[0] || data.username,
        googleID: userGoogle?.uid || ''
      }
      SIGN_IN(dataTosend).then(res => {
        if (res?.message) {
          return alert(res?.message)
        }

        if (res?.id) {
          reset()
          return alert(`The user ${res?.username} is registered. Wait for the validation of your account.`)
        }

      }).catch(console.error)
    }
  }

  // const onInputFileOne = (e) => {
  //   if (e?.target?.files) {
  //     const file = e?.target?.files[0]
  //     setFilesNames({ ...FilesNames, [e?.target?.name]: file?.name })
  //     const reader = new FileReader()
  //     file && reader.readAsDataURL(file)

  //     const preview = document.querySelector(`#preview_img_${e?.target?.name}`)
  //     const image = document.createElement('img')
  //     preview && (preview.innerHTML = '')
  //     reader.onload = () => {
  //       image.src = reader.result ? reader.result.toString() : ''
  //       preview && preview.append(image)
  //     }
  //   }
  // }

  return (
    <div className={formStyles.mainContainer}>
      <h4 className={formStyles.createStart}>Start for free.</h4>
      <h2>Create your account<span>.</span></h2>
      <div>
        <div className={formStyles.steps_index}>
          <div style={{ backgroundColor: step >= 1 && '#FF5F6D3F' }}></div>
          <div style={{ backgroundColor: step >= 2 && '#FF5F6D7F' }}></div>
          <div style={{ backgroundColor: step >= 3 && '#FF5F6D' }}></div>
        </div>
        <div className={formStyles.card}>
          <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            {
              step === 1 &&
              <>
                {
                  userGoogle && <button className={`${formStyles.button} btn`} onClick={() => setUserGoogle()}>X</button>
                }
                {
                  !userGoogle && step === 1 &&
                  <>
                    <div className={formStyles.center}>
                      <button className={`${formStyles.button} ${formStyles.button_google} btn`} onClick={login}><AiOutlineGoogle size={35} /> Sign up with Google</button>
                    </div>
                    <div className={formStyles.or}>or</div>
                  </>
                }
                {
                  userGoogle?.photoURL &&
                  <div className={formStyles.center}>
                    <img className={formStyles.profilepic} src={userGoogle?.photoURL} alt={userGoogle?.displayName} />
                  </div>
                }
                {
                  !userGoogle?.email && <InputComponent register={register} errors={errors} name='email' placeholder='Your email' type='text' config={{ required: true, minLength: 8 }} />
                }
                {
                  userGoogle?.email && <span> {userGoogle.email} </span>
                }

                <InputComponent register={register} errors={errors} name='password' placeholder='Your password' type='password' config={{ required: true, minLength: 8 }} />

                <InputComponent register={register} errors={errors} name='passwordVerify' placeholder='Repeat your password' type='password' config={{ required: true, minLength: 8 }} />

                <div className={formStyles.center}>
                  <button className={`${formStyles.button} btn`} type='submit'>Next</button>
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
                  !userGoogle?.email.split('@')[0] && <InputComponent register={register} errors={errors} name='username' placeholder='Your username' type='text' config={{ required: true, minLength: 8 }} />
                }

                <InputComponent register={register} errors={errors} name='name' placeholder='Your name' type='text' config={{ required: true, minLength: 2 }} />

                <InputComponent register={register} errors={errors} name='lastname' placeholder='Your lastname' type='text' config={{ required: true, minLength: 2 }} />

                <div className={formStyles.button_prev_next_container}>
                  <button className={`${formStyles.button} btn`} type='button' onClick={() => setStep((prevStep) => prevStep - 1)}>Previous</button>
                  <button className={`${formStyles.button} btn`} type='submit'>Next</button>
                </div>

              </>
            }

            {
              step === 3 &&
              <>
                {/* <div className={formStyles.input_container}>
                  <input type="file" onInput={onInputFileOne} {...register('photoDNIFront', { required: true })} />
                  {errors.photoDNIFront && <span className={formStyles.input_error}>This field is required</span>}
                </div> */}
                <InputComponent register={register} errors={errors} name='DNI' placeholder='Your DNI' type='text' config={{ required: true, minLength: 7, maxLength: 9, IsNumber: true }} />
                <InputComponent register={register} errors={errors} name='photoDNIFront' placeholder='Your DNI photo' type='file' config={{ required: true }} />

                {/* <div id='preview_img_photoDNIFront' className={formStyles.image_preview}>
                </div> */}

                {/* <div className={formStyles.input_container}>
                  <input type="file" name='file-1' onInput={onInputFileOne} className={formStyles.input_file} {...register('photoDNIReverse', { required: true })} />
                  {errors.photoDNIReverse && <span className={formStyles.input_error}>This field is required</span>}
                </div> */}
                <InputComponent register={register} errors={errors} name='photoDNIReverse' placeholder='Your DNI' type='file' config={{ required: true }} />

                {/* <div id='preview_img_photoDNIReverse' className={formStyles.image_preview}>
                </div> */}
                <div className={formStyles.center}>
                  <button className={formStyles.button} type='button' onClick={() => setStep((prevStep) => prevStep - 1)}>Previous</button>

                </div>

                <div className={formStyles.center}>
                  <button className={`${formStyles.button} ${formStyles.button_submit}`} type='submit'>Create your wallet.</button>
                </div>
              </>
            }

          </form>

        </div>
      </div>
    </div>
  )
}

export default SignIn
