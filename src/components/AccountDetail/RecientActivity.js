import React, { useEffect, useState } from 'react'
import styles from './RecientActivity.module.css'
import { setFormat } from '../../hooks/setFormatDate'
// import { useDispatch } from 'react-redux'

const RecientActivity = ({ activities, setMovement, openDetails }) => {
  // eslint-disable-next-line no-use-before-define
  const [orderDate, setOrderDate] = useState([])
  const [interruptor, setInterruptor] = useState(false)
  const [interruptor2, setInterruptor2] = useState(false)
  const [filter, setFilter] = useState("")
  const handlerClick = (activitie) => {
    openDetails()
    setMovement(activitie)
  }

  let arrNew = activities.map(e => {
    return {
      categories: e.categories.name,
      fecha: setFormat(new Date(e.date), 'en-EN', { dateStyle: 'long' }),
      amount: e.amount,
      year: setFormat(new Date(e.date), 'en-EN', { dateStyle: 'long' }).split(" ")[2],
      date: setFormat(new Date(e.date), 'en-EN', { dateStyle: 'long' }).split(" ")[1]
    }
  })

  const newArray = arrNew

  function dasda () {
    if (!interruptor2) {
      arrNew = arrNew.slice(0, 3)
    }
  }

  function allmov () {
    const arrNew = newArray
    setOrderDate(arrNew)
    if (!interruptor2) {
      const arrNew = newArray
      setOrderDate(arrNew)
      setInterruptor2(true)
    }
  }

  const sortByDate = () => {
    if (!interruptor) {
      arrNew.sort((a, b) => {
        return a.date.substring(0, a.date.length - 1) - b.date.substring(0, b.date.length - 1)
      })
      setInterruptor(true)
    }
    if (interruptor) {
      arrNew.sort((a, b) => {
        return b.date.substring(0, b.date.length - 1) - a.date.substring(0, a.date.length - 1)
      })
      setInterruptor(false)
    }
    setOrderDate(arrNew)
  }

  const onSelectCategory = (e) => {
    setFilter(e.target.value)
  }

  const categoriesRaw = activities.map((abc) => (
    abc?.categories?.name
  ))
  const categoriesUnique = [...new Set(categoriesRaw)]

  useEffect(() => {
    dasda()
    setFilter("")
    setOrderDate(arrNew)
  }, [])

  const resetFilterYresetSort = () => {
    setFilter("")
    arrNew.sort((a, b) => {
      return b.date.substring(0, b.date.length - 1) - a.date.substring(0, a.date.length - 1)
    })
    arrNew = arrNew.slice(0, 3)
    setOrderDate(arrNew)
  }

  return (
    <div className={styles.container}>
      Movements
      <span className={styles.title}>

        <button className={styles.btn} onClick={sortByDate}>Order by date {interruptor ? <span>DESC</span> : <span>ASC</span>}</button>

        <button className={styles.btn} onClick={(e) => allmov(e)}>Show movements</button>
        <button className={styles.btn} onClick={() => resetFilterYresetSort()}>Hide movements</button>

        <select name="filterCategory" onChange={onSelectCategory}>
          <option selected={true} disabled="disabled">Category...</option>
          {categoriesUnique?.map((abc) => (
            <option key={abc} value={abc}>{abc}</option>
          ))}
        </select>



      </span>
      {
        !filter &&
        orderDate.map((activitie, i) => (
          <div key={i} className={styles.activitie} onClick={() => handlerClick(activitie)}>
            <div className={styles.container}>
              <span>{activitie?.categories}</span>
              <span>{activitie?.fecha}</span>
            </div>
            <span className={styles.amount}> {`$${activitie?.amount}`}</span>
          </div>
        ))
      }
      {
        filter &&
        orderDate.filter((xxx) => xxx?.categories === filter).map((ddd) => (
          <div key={ddd.id} className={styles.activitie} onClick={() => handlerClick(ddd)}>
            <div className={styles.container}>
              <span>{ddd?.categories}</span>
              <span>{ddd?.fecha}</span>
            </div>
            <span className={styles.amount}> {`$${ddd?.amount}`}</span>
          </div>
        ))
      }

    </div>
  )
}

export default RecientActivity