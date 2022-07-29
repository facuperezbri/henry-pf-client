import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRatings } from '../../redux/actions'
import full from '../../assets/img/estrellaLlena.png'
import empty from '../../assets/img/estrellaVacia.png'
import styles from './Ratings.module.css'


export default function Ratings() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRatings())
    },[])
    const ratings = useSelector(state => state.ratings)
    console.log(ratings)
    const qFull = ratings[0]?.rate
    const qEmpty = 5-ratings[0]?.rate 

  return (
    <div>
        <ul className={styles.starRate}>
            {[...Array(2)].map((e) => 
            <li>
                <img src={full} alt="nope" className={styles.fullStar}/>
            </li>)}
            {[...Array(3)].map((e) => 
            <li>
                <img src={empty} alt="nope" className={styles.emptyStar}/>
            </li>)}
        </ul>
    </div>
  )
}
