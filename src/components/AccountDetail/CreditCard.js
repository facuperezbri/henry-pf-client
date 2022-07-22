import React from 'react'
import styles from './CreditCard.module.css'


const CreditCard = ({ balance, number, name }) => {
  return (
    <div className={styles.credit_card_container}>
    <div className={styles.credit_card}>

        <span className={styles.title}>wallet.</span>
        <span className={styles.balance}>${balance}</span>
        <span className={styles.number}>{number}</span>
    </div>
    </div>
  )
}

export default CreditCard