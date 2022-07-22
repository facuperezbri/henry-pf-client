import React from 'react'
import styles from './RecientActivity.module.css'

const setFormat = (date, locale, options) =>
  new Intl.DateTimeFormat(locale, options).format(date)

const RecientActivity = ({ activities }) => {
  return (
    <div className={styles.container}>
        <span>
          Movements
        </span>
        {
            activities.map((activitie) => (
                <div key={activitie.id} className={styles.activitie}>
                    <div className={styles.container}>
                        <span>{activitie?.categories?.name}</span>
                        <span>{setFormat(new Date(activitie?.date), 'es-ES', { dateStyle: 'long' })}</span>
                    </div>
                    <span> {`$${activitie?.amount}`}</span>
                </div>
            ))
        }
    </div>
  )
}

export default RecientActivity