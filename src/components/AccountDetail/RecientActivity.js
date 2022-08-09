import React, { useEffect, useState } from 'react'
import styles from './RecientActivity.module.css'
import { setFormat } from '../../hooks/setFormatDate'
// import { useDispatch } from 'react-redux'
import Button from '../uiComponents/Button'
import CardText from '../uiComponents/CardText'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'


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
    setActivitiesState(activities)
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
      <span className='flex flex-row'>

        <Button className='flex justify-center items-center' onClick={handlerSortByDate}>Date {isAcendantByDate ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/>}</Button>

        <Button onClick={handlerShowAllMovements}>{isShowAllMovements ? 'Hide' : 'Show all'}</Button>

        <select className='dark:text-slate-800' name="filterCategory" onChange={handlerFilterByCategoryName}>
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
            <span className={styles.amount}> {activitie?.operations?.name === "Debit" && `- `}{`$ 
              ${
              activitie?.amount.toString().length > 6 ?
              `${activitie?.amount.toString().slice(0,activitie?.amount.toString().length-6)},${activitie?.amount.toString().slice(activitie?.amount.toString().length-6,activitie?.amount.toString().length-3)},${activitie?.amount.toString().slice(activitie?.amount.toString().length-3)}`
              :
              activitie?.amount.toString().length > 3 ?
              `${activitie?.amount.toString().slice(0,activitie?.amount.toString().length-3)},${activitie?.amount.toString().slice(activitie?.amount.toString().length-3)}`
              :
              `${activitie?.amount}`
              }`}
            </span>
          </div>
        )).slice(0, isShowAllMovements ? activitiesState.length : 3)
      }

    </div>
  )
}

export default RecientActivity