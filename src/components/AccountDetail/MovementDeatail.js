import React from 'react'
import style from './MovementDeatail.module.css'
import { setFormat } from '../../hooks/setFormatDate'
// import { useDispatch } from 'react-redux'
// import { sendMovement } from "../../redux/actions/index"

const MovementDeatail = ({ movement, closeDetails }) => {
    console.log(movement)
    return (
        <>
            <div className={style.movement_container} onClick={closeDetails} />
            <div className={style.movement}>
                <div>
                    <button className={style.button} onClick={closeDetails}>Close</button>
                </div>
                <div className={style.details}>
                    <div className={style.amount_container}>
                        <span className={style.amount}>${movement.amount}</span>
                    </div>

                    <div className={style.detail}>
                        <span>Operation</span>
                        <span>{movement?.operations?.name}</span>
                    </div>

                    <div className={style.detail}>
                        <span>Receipt</span>
                        <span>{movement?.receipt?.toString()}</span>
                    </div>

                    <div className={style.detail}>
                        <span>Category</span>
                        <span>{movement?.categories?.name}</span>
                    </div>

                    <div className={style.detail}>
                        <span>Currency</span>
                        <span>{movement?.accounts?.currencies?.name}</span>

                    </div>

                    <div className={style.detail}>
                        <span>User</span>
                        <span>{movement?.accounts?.users?.username}</span>

                    </div>

                    <div className={style.detail}>
                        <span>Date</span>
                        <span>{setFormat(new Date(movement?.fecha), 'en-EN', { dateStyle: 'long' })}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovementDeatail