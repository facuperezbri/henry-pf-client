import React, { useState } from 'react'
import style from './MovementDeatail.module.css'
import { setFormat } from '../../hooks/setFormatDate'
import { useDispatch} from 'react-redux'
import {sendMovement} from "../../redux/actions/index"
const MovementDeatail = ({movement, closeDetails}) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState(false)
    const [info, setInfo] = useState({
            cvuMain:"456456776363751528987",
            amount:movement.amount,
            cvuD: "456456776363751528987",
            currency:movement.accounts.currencies.name,
            operation:movement.operations.name,
            category:movement.categories.name,
            comment: ""     
    })
    
    const sendDetailInfoMovement= (e)=>{
        e.preventDefault()
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const send=(e)=>{
        e.preventDefault()
        dispatch(sendMovement(info))
        setInfo({...info,comment:""})
        setComment(false)
    }
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
                    <span>{movement?.receipt.toString()}</span>
                </div>

                <div className={style.detail}>
                    <span>Categorie</span>
                    <span>{movement?.categories?.name}</span>
                </div>

                <div className={style.detail}>
                    <span>Currencie</span>
                    <span>{movement?.accounts?.currencies?.name}</span>

                </div>

                <div className={style.detail}>
                    <span>User</span>
                    <span>{movement?.accounts?.users?.username}</span>

                </div>

                <div className={style.detail}>
                    <span>Date</span>
                    <span>{setFormat(new Date(movement?.date), 'en-EN', { dateStyle: 'long' })}</span>
                </div>
                {!comment ?<div className={style.containerbtn} onClick={()=>setComment(true)} >
                    <button>add comment</button>
                </div> :
                 <div className={style.comment}>
                 <textarea onChange={ (e) => sendDetailInfoMovement(e) } value={info.comment} name="comment"/>
                 <button onClick={(e) => send(e)}>send</button>
             </div>
                }
               

            </div>
        </div>
    </>
  )
}

export default MovementDeatail