import React from 'react'
import style from './MovementDeatail.module.css'
import { setFormat } from '../../hooks/setFormatDate'
// import { useDispatch } from 'react-redux'
// import { sendMovement } from "../../redux/actions/index"
import Button from '../uiComponents/Button'

const MovementDeatail = ({ movement, closeDetails }) => {

const filterOfComment = movement.accounts.movements.find(e=> e.amount === movement.amount)


    return (
        <>
            <div className="fixed w-screen h-screen bg-gray-200 opacity-50 backdrop-blur-lg z-10 inset-0  " onClick={closeDetails} />
            <div className="h-2/3 w-2/3 fixed p-4 bg-gray-200 z-20 bottom-0 rounded-t-md dark:bg-slate-800">
                <div className='flex justify-end'>
                    <Button onClick={closeDetails}>Close</Button>
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
                        <span>{setFormat(movement?.date, 'en-EN', 'long')}</span>
                    </div>
                    <div className={style.detail}>
                        <span>Comment</span>
                        <span>{filterOfComment.comment}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovementDeatail