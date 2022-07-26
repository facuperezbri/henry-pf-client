import style from './Landing.module.css'
import { NavLink } from 'react-router-dom'

import { MdSecurity } from 'react-icons/md'

export default function Landing () {
  return (

    <div className={style.container}>
      <nav className={style.nav}>wallet.</nav>
      <main className={style.main}>
        <div>
          <h1>Your payments, your <span>wallet.</span></h1>
          <h3>The definitive wallet.</h3>
          <NavLink to="account/login">
            <button className={style.btn}>Let's go</button>
          </NavLink>
        </div>
        <div className={style.cardContainer}>

        </div>
      </main >
      <div className={style.offerContainer}>
        <h2>What do we offer?</h2>
        <ul className={style.offersListContainer}>
          <li>
            <div>
              <h6>Security Guarantee</h6>
              <p>Your data and funds will be securely protected.</p>
            </div>
          </li>
          <li>
            <div>
              <h6>Keep Track</h6>
              <p>You can keep a track on all your expenses.</p>
            </div>
          </li>
          <li>
            <div>
              <h6>Crypto</h6>
              <p>Buy and sell crypto with 0% fee.</p>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}
