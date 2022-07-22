import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './AccountDetail.module.css'

import creditCard from '../../assets/img/creditCard.png'
import transport from '../../assets/icons/transport.svg'
import shopping from '../../assets/icons/shopping.svg'
import subscriptions from '../../assets/icons/subscriptions.svg'
import groceries from '../../assets/icons/groceries.svg'
import { getCategory, getMovements, getUser } from '../../redux/actions'



export default function AccountDetail () {
  const dispatch = useDispatch()
  const usData = useSelector(state => state.userData)
  const categories = useSelector(state => state.categories)
  const movements = useSelector(state => state.movements)

  useEffect(() => {
    dispatch(getUser(window.localStorage.getItem('token'))).then(r => dispatch(getMovements(r.payload.accounts[0].cvu)))
    dispatch(getCategory())
  }, [])



  return (
    <div className={style.detailContainer}>
      <h2 className={style.title}>My card</h2>
      <div className={style.infoContainer}>
        <div className={style.cardContainer}>
          <div className={style.creditCardImage}><img src={creditCard} alt="Credit card background" /></div>
          <div className={style.textContainer}>
            <h3>Balance</h3>
            <p>$ {usData.length === 0 ? 0 : usData.accounts[0].balance}</p>
          </div>
        </div>
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
      </div>
    </div>
  )
}
