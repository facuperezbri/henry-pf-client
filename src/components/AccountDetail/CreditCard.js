import React, { useState } from 'react'
import styles from './CreditCard.module.css'


const CreditCard = ({ balance, number, name, lastname }) => {
  //--------------------------------------HOOKS-----------------------------------------------------------------
  const [infoSensity, setInfoSensity] = useState({
    targetNumber: number,
    targetNumberCifrado: String(number).split("").map((e, i) => {
      if (i === 17 || i === 18 || i === 19 || i === 20) {
        return e
      }
      return e = "*"
    }).join(""),
    money: balance,
    moneyCifrado: "$$$"
  })
  const [interruptor, setInterruptor] = useState(true)

  //--------------------------------------FUNCTIONS-------------------------------------------------------------
  const interruptorClick = () => {
    if (interruptor) {
      setInterruptor(false)
    } else {
      setInterruptor(true)
    }
  }
  //------------------------------------------------------------------------------------------------------------
  return (
    <div onMouseDown={interruptorClick} className={styles.credit_card_container}>
      <div className={styles.credit_card}>
        <span className={styles.title}>w.</span>
        <span className={styles.number}>{interruptor ? infoSensity.targetNumberCifrado : infoSensity.targetNumber}</span>
        <div className={styles.balance_name_container}>
          <span className={styles.name}>{`${name} ${lastname}`.toLocaleUpperCase()}</span>
          <span className={styles.balance}>$ {interruptor ? infoSensity.moneyCifrado : balance}</span>
        </div>
      </div>
    </div>
  )
}

export default CreditCard