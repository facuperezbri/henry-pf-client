import React, { useEffect, lazy, Suspense, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './AccountDetail.module.css'

import creditCard from '../../assets/img/creditCard.png'
import { getCategory, getMovements, getUser } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import CreditCard from './CreditCard'
import MovementDeatail from './MovementDeatail'
import { useToken } from '../../hooks/useToken'
import loading from '../../assets/spinner/spinner.svg'
import BalanceChart from './BalanceChart'
import CategoryExpense from './CategoryExpense'
import { PieGraph } from './PieGraph'
// import Modal from '../uiComponents/modal'

const RecientActivity = lazy(() => import('./RecientActivity'))
export default function AccountDetail () {
  const dispatch = useDispatch()
  const { token } = useToken()
  const usData = useSelector(state => state.userData)
  const [movement, setMovement] = useState({})
  const [showMovementDetails, setshowMovementDetails] = useState(false)
  // const categories = useSelector(state => state.categories)
  // const movements = useSelector(state => state.movements)

  useEffect(() => {
    dispatch(getUser(token)).then(r => dispatch(getMovements(r.payload?.accounts[0]?.cvu)))
    dispatch(getCategory())
  }, [])

  const closeDetails = () => {
    setshowMovementDetails(false)
  }
  const openDetails = () => {
    setshowMovementDetails(true)
  }


  if (!usData?.accounts || !token) {
    return (
      <div className={style.detailContainer}>
        <div className={style.loading} >
          <img src={loading} alt="Loading" />
        </div>
      </div>)
  }
  return (
    <div className={style.detailContainer}>
      <h2 className={style.title}>My card</h2>

      <div className={style.infoContainer}>
        <CreditCard 
        balance={usData?.accounts[0]?.balance || 0} 
        number={usData?.accounts[0]?.cvu} 
        name={usData?.name} 
        lastname={usData?.lastname} />
      </div>

      <div>
        <CategoryExpense activities={usData?.accounts[0]?.movements}/>
      </div>

      <div className='w-full max-h-72 grid place-content-center'>
        {/* <BalanceChart /> */}
          <PieGraph movements={usData?.accounts[0]?.movements} />
      </div>
      
      <div className={style.recentActivity}>
        <Suspense fallback={<div>Loading</div>}>
          <RecientActivity
            activities={usData?.accounts[0]?.movements}
            setMovement={setMovement}
            openDetails={openDetails} />
        </Suspense>
      </div>

      {
        showMovementDetails &&
        <MovementDeatail
          movement={movement}
          closeDetails={closeDetails} />
      }


    </div>
  )
}
