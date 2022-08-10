import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRatings } from '../../redux/actions'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import styles from './Ratings.module.css'
import Slideshow from './Slides'


export default function Ratings () {

    let ratings = useSelector(state => state.ratings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRatings())
    }, [])

    let justRates = ratings?.map((x) => x.rate)

    let sum = 0;
    for (let i = 0; i < justRates?.length; i++) {
        sum += justRates[i];
    }
    let averageRate = Math.ceil(sum / justRates?.length)

    const qFull = averageRate
    const qEmpty = 5 - qFull

    if (!ratings[0]?.rate) {
        return (
            <div> Loading... </div>
        )
    }

    return (
        <div className={styles.container}>

            <div className={styles.carr}>
                <Slideshow ratings={ratings} />
            </div>

            <ul className={styles.starRate}>
                <label className={styles.label}>Our users rate us with: </label>
                {[...Array(qFull)]?.map((e, i) =>
                    <li key={i}>
                        <AiFillStar className={styles.fullStar} />
                    </li>)}
                {[...Array(qEmpty)]?.map((e, i) =>
                    <li key={i}>
                        <AiOutlineStar className={styles.emptyStar} />
                    </li>)}
            </ul>

        </div>
    )
}
