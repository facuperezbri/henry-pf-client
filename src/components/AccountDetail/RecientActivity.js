import React, { useEffect, useState } from 'react'
import styles from './RecientActivity.module.css'
import { setFormat } from '../../hooks/setFormatDate'

const RecientActivity = ({ activities, setMovement, openDetails }) => {
  const [orderDate, setOrder] = useState([])
  const [filter, setFilter] = useState("")
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



  function loadAgain(){
		window.location.reload()
	}

  const onSelectCategory = (e) => {
    setFilter(e.target.value)
  }
  const categoriesRaw = activities.map((abc) => (
    abc?.categories?.name 
  ))
  const categoriesUnique = [...new Set(categoriesRaw)]
  console.log(categoriesUnique)
  useEffect(() => {
  setFilter("")
  },[])



  return (
    <div className={styles.container}>
        <span className={styles.title}>
          Movements
        <button>order by fecha</button>




        <select name="filterCategory" onChange={onSelectCategory}>
          <option selected="true" disabled="disabled">Category...</option>
          {categoriesUnique.map((abc) => (
            <option value={abc}>{abc}</option> 
          ))}
        </select>

        <button className={styles.botonResetear} onClick={()=>loadAgain()}>Reset Filter</button>





        </span>
        { filter === "" ?
            activities.map((activitie) => (
                <div key={activitie.id} className={styles.activitie} onClick={() => handlerClick(activitie)}>
                    <div className={styles.container}>
                        <span>{activitie?.categories?.name}</span>
                        <span>{setFormat(new Date(activitie?.date), 'en-EN', { dateStyle: 'long' })}</span>
                    </div>
                    <span className={styles.amount}> {`$${activitie?.amount}`}</span>
                </div>
            ))
            :
            activities.filter((xxx) => xxx?.categories?.name === filter).map((ddd) => (
              <div key={ddd.id} className={styles.activitie} onClick={() => handlerClick(ddd)}>
                  <div className={styles.container}>
                      <span>{ddd?.categories?.name}</span>
                      <span>{setFormat(new Date(ddd?.date), 'en-EN', { dateStyle: 'long' })}</span>
                  </div>
                  <span className={styles.amount}> {`$${ddd?.amount}`}</span>
              </div>
          ))
        }
        
    </div>
  )
}

export default RecientActivity