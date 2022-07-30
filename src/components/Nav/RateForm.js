import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeRate, postRating } from '../../redux/actions'
import empty from '../../assets/img/estrellaVacia.png'
import full from '../../assets/img/estrellaLlena.png'
import styles from './RateForm.module.css'

export default function RateForm() {
    const dispatch = useDispatch()
    function closeRateClick() {
        dispatch(closeRate(false))
    }

    const [input, setInput] = useState({
		rate: 0,
		comment: null,
	})

    function handleClick(xxx) {
        setInput((input) => {
            return {
                ...input,
                rate: xxx
            }
        })
    }

    // function handleChange(e) {
	// 	setInput((input)=>{
	// 		return {
	// 		...input,
	// 		[e.target.name]: e.target.value
	// 		}
	// 	})
	// }

	// function handleSubmit(e){
	// 	e.preventDefault();
	// 	postRating(input);
	// 	alert('Thank you for your rate!');
	// 	setInput({
    //         rate: 0,
    //         comment: null,
	// 	})	
    // }	

    console.log(input)

  return (
    <div>

        <div>Rate:
            <ul>



            {[...Array(input?.rate === 0 ? 0 : input?.rate)]?.map((e,i) => 
            <li>
                <img src={full} value={1+1} key={i+1} alt="nope" className={styles.fullStar} onClick={() => handleClick(i+1)}/>
            </li>)}



            {[...Array(input.rate === 0 ? 5 : 5-input.rate)]?.map((e,i) => 
            <li>
                <img src={empty} value={1+input?.rate+i} key={i} alt="nope" className={styles.emptyStar}  onClick={() => handleClick(i+1+input?.rate)}/>
            </li>)}


            
            </ul>
        </div>

        <button onClick={closeRateClick}>close</button>

    </div>
  )
}
