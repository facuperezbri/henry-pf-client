import React, { useState } from 'react'
import styles from './CreditCard.module.css'
import AlertDni from './alertDNI/AlertDni'

const CreditCard = ({ balance, number, name, lastname }) => {
  // console.log(number, balance)
  //--------------------------------------HOCKS-----------------------------------------------------------------
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
  const [dni,setDni] = useState("denegado")

  const [interruptor, setInterruptor] = useState(false)

  //--------------------------------------FUNCTIONS-------------------------------------------------------------
  const interruptorClick = () => {
          if(dni === "denegado"){
            return setInterruptor(true)
          }else{
            setDni("denegado")
          }
    
  }
  //------------------------------------------------------------------------------------------------------------
  return (
    <div style={{position:"relative"}}>

   
    <div onMouseDown={interruptorClick} className={styles.credit_card_container}>
      {interruptor ? <AlertDni setInterruptor={setInterruptor} dniPassword={setDni}/> : null}
      <div className={styles.credit_card}>
        <span className={styles.title}>w.</span>
        <span className={styles.number}>{dni === "acceso" ? infoSensity.targetNumber : infoSensity.targetNumberCifrado}</span>
        <div className={styles.balance_name_container}>
          <span className={styles.name}>{`${name} ${lastname}`.toLocaleUpperCase()}</span>
          <span className={styles.balance}>${dni === "acceso"  ? infoSensity.money : infoSensity.moneyCifrado}</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreditCard