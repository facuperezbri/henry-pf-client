import style from './Landing.module.css'
import { NavLink } from 'react-router-dom'

export default function Landing () {
  return (
    <div className={style.container}>
      <h2 className={style.description}>wallet.</h2>
      <div className={style.containerTwoElement}>
        <div>
          <img className={style.img} alt="nope" src="https://res.cloudinary.com/da76mkk4h/image/upload/v1658264046/landing_bi2wmp.png" />
        </div>
        <div className={style.containerWelcome}>
          <h3 className={style.h3}>tu billetera virtual</h3>
          <NavLink exact to="/account/signin" >
            <button className={style.btn}>sign in</button>
          </NavLink>
          <NavLink exact to="/account/login" >
            <button className={style.btn}>log in</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
