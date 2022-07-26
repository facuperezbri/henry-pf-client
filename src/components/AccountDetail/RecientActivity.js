import React, { useState } from 'react'
import styles from './RecientActivity.module.css'
import { setFormat } from '../../hooks/setFormatDate'

const RecientActivity = ({ activities, setMovement, openDetails }) => {
  const [orderDate, setOrder] = useState([])
  const handlerClick = (activitie) => {
    openDetails()
    setMovement(activitie)
  }

  const arrNew = activities.map(e=>{
    return {
      name:e.categories.name,
      fecha:setFormat(new Date(e.date), 'en-EN', { dateStyle: 'long' }),
      amount:e.amount
    }
  })
console.log(arrNew)
  return (
    <div className={styles.container}>
        <span className={styles.title}>
          Movements
        <button>order by fecha</button>
        </span>
        {
            activities.map((activitie) => (
                <div key={activitie.id} className={styles.activitie} onClick={() => handlerClick(activitie)}>
                    <div className={styles.container}>
                        <span>{activitie?.categories?.name}</span>
                        <span>{setFormat(new Date(activitie?.date), 'en-EN', { dateStyle: 'long' })}</span>
                    </div>
                    <span className={styles.amount}> {`$${activitie?.amount}`}</span>
                </div>
            ))
        }
    </div>
  )
}

export default RecientActivity