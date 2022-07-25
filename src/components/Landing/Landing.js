import style from './Landing.module.css'
import { NavLink } from 'react-router-dom'

export default function Landing () {
  return (
    <div className={style.container}>
      <div className={style.containerTwoElement}>
      <h2 className={style.description}>wallet.</h2>
        <div className={style.img__container}>
          <img className={style.img} alt="nope" src="https://res.cloudinary.com/da76mkk4h/image/upload/v1658264046/landing_bi2wmp.png" />
        </div>
        <div className={style.containerWelcome}>
          <h3 className={style.h3}>Your money, your wallet.</h3>
          <h4>Make your life simpler with everything just a click away.</h4>
          <div className={style.button_container}>
            <NavLink exact to="/account/signin" >
              <button className={style.btn}>Sign in</button>
            </NavLink>
            <NavLink exact to="/account/login" >
              <button className={style.btn}>Log in</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
