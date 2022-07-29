import style from './Landing.module.css'
import { NavLink } from 'react-router-dom'

import Typewriter from 'typewriter-effect';

import { MdSecurity } from "react-icons/md"
import { AiOutlineShopping } from "react-icons/ai"
import { GiTwoCoins } from 'react-icons/gi'

export default function Landing () {
  return (

    <div className={style.container}>
      <nav className={style.nav}>wallet.</nav>
      <main className={style.main}>
        <div>
          <h1>Your <Typewriter
            options={{
              strings: ['money,', 'payments,', 'crypto,'],
              autoStart: true,
              loop: true,
            }}
          />your <span>wallet.</span></h1>
          <h3>The definitive wallet.</h3>
          <NavLink to="/account/login">
            <button className={style.btn}>Let's go</button>
          </NavLink>
        </div>
        <div className={style.credit_card_container}>
          <div className={style.credit_card}>
            <span className={style.title}>w.</span>
            <span className={style.number}>4503 4456 0000 1234</span>
            <div className={style.balance_name_container}>
              <span className={style.name}>JOHN DOE</span>
            </div>
          </div>
        </div>
        {/* <div className={style.cardContainer}>

        </div> */}
      </main >
      <div className={style.offerContainer}>
        <h2>What do we offer?</h2>
        <ul className={style.offersListContainer}>
          <li>
            <MdSecurity size={40} />
            <div>
              <h6>Security Guarantee</h6>
              <p>Your data and funds will be securely protected.</p>
            </div>
          </li>
          <li>
            <AiOutlineShopping size={40} />
            <div>
              <h6>Keep Track</h6>
              <p>You can keep a track on all your expenses.</p>
            </div>
          </li>
          <li>
            <GiTwoCoins size={40} />
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
