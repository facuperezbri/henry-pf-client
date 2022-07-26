import React from 'react'
import styles from './CreditCard.module.css'


const CreditCard = ({ balance, number, name, lastname }) => {
  console.log(number, balance)
  return (
    <div className={styles.credit_card_container}>
      <div className={styles.credit_card}>
        <span className={styles.title}>wallet.</span>
        <span className={styles.number}>{number}</span>
        <div className={styles.balance_name_container}>
          <span className={styles.name}>{`${name} ${lastname}`.toLocaleUpperCase()}</span>
          <span className={styles.balance}>${balance}</span>
        </div>
      </div>
    </div>
  )
}

export default CreditCard