import React from 'react'
import Styles from './Loader.module.css'

const Loader = () => {
  return (
    <svg className={Styles.svg} viewBox="25 25 50 50">
        <circle className={Styles.circle} r="20" cy="50" cx="50"></circle>
    </svg>
  )
}

export default Loader