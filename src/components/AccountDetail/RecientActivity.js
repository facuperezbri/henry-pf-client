import React, { useEffect, useState } from 'react'
import styles from './RecientActivity.module.css'
import { setFormat } from '../../hooks/setFormatDate'
// import { useDispatch } from 'react-redux'
import Button from '../uiComponents/Button'
import { CardText } from '../Profile/Profile'

const RecientActivity = ({ activities, setMovement, openDetails }) => {
  // eslint-disable-next-line no-use-before-define
  const [activitiesState, setActivitiesState] = useState(activities)
  const [categories, setCategories] = useState([])
  const [isAcendantByDate, setIsAcendantByDate] = useState(true)

  const [isShowAllMovements, setIsShowAllMovements] = useState(false)

  
  const [filterByCategoryName, setFilterByCategoryName] = useState("")
  const handlerClick = (activitie) => {
    openDetails()
    setMovement(activitie)
  }
  
  useEffect(() => {
    const categoriesRaw = activities.map((abc) => (
      abc?.categories?.name
    ))
    const categoriesUnique = [...new Set(categoriesRaw)]
    setCategories(categoriesUnique)
  }, [activities])


  const handlerSortByDate = () => {
    setIsAcendantByDate(!isAcendantByDate)
  }

  const handlerFilterByCategoryName = (e) => {
    setFilterByCategoryName(e.target.value)
  }

  const sortByDate = (movementOne, movementTwo) => {
    if (new Date(movementOne.date).getTime() > new Date(movementTwo.date).getTime()) {
      return isAcendantByDate ? -1 : 1
    }
    if (new Date(movementOne.date).getTime() < new Date(movementTwo.date).getTime()) {
      return isAcendantByDate ? 1 : -1
    }
    return 0
  }
  const filterByCategory = (activitie) => {
    if (!filterByCategoryName) {
      return true
    }
    return activitie.categories.name === filterByCategoryName
  }


  const handlerShowAllMovements = () => {
    setIsShowAllMovements(!isShowAllMovements)
  }


  return (
    <div className='flex flex-col gap-2'>
      <div className='mt-4'>
        <CardText>
          <span>
            Movements
          </span>
        </CardText>
      </div>
      <span>
        
        <Button onClick={handlerSortByDate}>Order by date {isAcendantByDate ? <span>ASC</span> : <span>DESC</span>}</Button>

        <Button onClick={handlerShowAllMovements}>{ isShowAllMovements ? 'Hide movements' : 'Show all movements' }</Button>

        <select name="filterCategory" onChange={handlerFilterByCategoryName}>
          <option selected={true} disabled="disabled">Category...</option>
          <option value="" selected>All</option>
          {categories?.map((CategoryName) => (
            <option key={CategoryName} value={CategoryName}>{CategoryName}</option>
          ))}
        </select>



      </span>

      {
        activitiesState?.sort(sortByDate)?.filter(filterByCategory)?.map((activitie) => (
          <div key={activitie?.id} className={styles.activitie} onClick={() => handlerClick(activitie)}>
            <div className={styles.container}>
              <span>{activitie?.categories?.name}</span>
              <span>{setFormat(activitie?.date, 'en-EN', 'long')}</span>
            </div>
            <span className={styles.amount}> {`$${activitie?.amount}`}</span>
          </div>
        )).slice(0, isShowAllMovements ? activitiesState.length : 3)
      }

    </div>
  )
}

export default RecientActivity