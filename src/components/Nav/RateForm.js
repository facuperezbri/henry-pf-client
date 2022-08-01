import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeRate, postRating } from '../../redux/actions'
import empty from '../../assets/img/estrellaVacia.png'
import full from '../../assets/img/estrellaLlena.png'
import styles from './RateForm.module.css'
import { set } from 'react-hook-form'

export default function RateForm({setPerilla}) {
    const dispatch = useDispatch()

    function closeRateClick() {
        // dispatch(closeRate(false))
        // return console.log("form rate se cerro con exito")
        setPerilla(false)
    }

    const [input, setInput] = useState({
		rate: 0,
		comment: undefined,
	})

    function handleClick(xxx) {
        setInput((input) => {
            return {
                ...input,
                rate: xxx
            }
        })
    }

    function handleChange(e) {
		setInput((input)=>{
			return {
			...input,
			comment: e.target.value
			}
		})
	}

    function resetForm() {
        setInput({
            rate: 0,
            comment: undefined,
		})    }

	function handleSubmit(e){
		e.preventDefault();
		postRating(input);
		alert('Thank you for your rate!');
		setInput({
            rate: 0,
            comment: undefined,
		})	
    }	

    // console.log(input)

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>

        <div>
        <label className={styles.label}>Rate:</label>            
            <ul className={styles.stars}>
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

        <div className={styles.inputDiv}>
			<label className={styles.label}>Review:</label>
			<textarea className={styles.input} type='text' value= {input.comment} onChange={handleChange} />
		</div>

        <button 
        type='submit' 
        // disabled={Object.keys(errors).length? true : false} 
        onClick={() => resetForm()}>
				Submit rate
			</button>

        </form>

        <button className={styles.botonCerrar} onClick={closeRateClick}>Close</button>
    
    </div>
  )
}
