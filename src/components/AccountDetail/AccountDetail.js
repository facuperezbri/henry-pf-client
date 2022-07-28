import React, { useEffect, lazy, Suspense, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './AccountDetail.module.css'

import creditCard from '../../assets/img/creditCard.png'
import transport from '../../assets/icons/transport.svg'
import shopping from '../../assets/icons/shopping.svg'
import subscriptions from '../../assets/icons/subscriptions.svg'
import groceries from '../../assets/icons/groceries.svg'
import { getCategory, getMovements, getUser } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import CreditCard from './CreditCard'
import MovementDeatail from './MovementDeatail'

import loading from '../../assets/icons/loading.svg'
import BalanceChart from './BalanceChart'

const RecientActivity = lazy(() => import('./RecientActivity'))
export default function AccountDetail () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const usData = useSelector(state => state.userData)
  const [movement, setMovement] = useState({})
  const [showMovementDetails, setshowMovementDetails] = useState(false)
  // const categories = useSelector(state => state.categories)
  // const movements = useSelector(state => state.movements)

  useEffect(() => {
    dispatch(getUser(window.localStorage.getItem('token'))).then(r => dispatch(getMovements(r.payload?.accounts[0]?.cvu)))
    dispatch(getCategory())
    if (usData?.error) {
      navigate('/')
    }
  }, [usData])


  if (!usData?.accounts) {
    return (
      <div className={style.loading} >
        <img src={loading} alt="not found"/>
      </div>)
  }
  const closeDetails = () => {
    setshowMovementDetails(false)
  }
  const openDetails = () => {
    setshowMovementDetails(true)
  }
  console.log(usData)
  return (
    <div className={style.detailContainer}>
      <h2 className={style.title}>My card</h2>
      <select>
        <option>{usData.accounts[0].cvu}</option>
      </select>
      <div className={style.infoContainer}>
        <CreditCard balance={usData?.accounts[0]?.balance || 0} number={usData?.accounts[0]?.cvu} name={usData?.name} lastname={usData?.lastname} />
        <div className={style.categoriesContainer}>
          <ul className={style.listContainer}>
            <li><img src={transport} alt="Transport icon" />
              <div>
                <h4>Transport</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><img src={shopping} alt="Shopping icon" />
              <div>
                <h4>Shopping</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><img src={subscriptions} alt="Subscriptions icon" />
              <div>
                <h4>Subscriptions</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><img src={groceries} alt="Groceries icon" />
              <div>
                <h4>Groceries</h4>
                <p>$182,95</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <Suspense fallback={<div>Loading</div>}>
            <RecientActivity activities={usData?.accounts[0]?.movements} setMovement={setMovement} openDetails={openDetails} />
          </Suspense>
        </div>
        {
          showMovementDetails &&
          <MovementDeatail movement={movement} closeDetails={closeDetails} />
        }
        <BalanceChart/>
      </div>
    </div>
  )
}
