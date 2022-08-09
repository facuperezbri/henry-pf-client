import React, { useState } from 'react'
import empty from '../../assets/img/estrellaVacia.png'
import full from '../../assets/img/estrellaLlena.png'
import styles from './RateForm.module.css'
import { set } from 'react-hook-form'
import axios from 'axios'
import { API_URL } from '../../services/API'
import { useToken } from '../../hooks/useToken'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function RateForm ({ setPerilla }) {

    const { token } = useToken()

    const rated = () => toast.success("😁 Thank you for your rate!")
    const error = () => toast.info("Already rate this app!")
    

    const [input, setInput] = useState({
        rate: 0,
        comment: undefined,
    })

    function handleClick (xxx) {
        setInput((input) => {
            return {
                ...input,
                rate: xxx
            }
        })
    }

    function handleChange (e) {
        setInput((input) => {
            return {
                ...input,
                comment: e.target.value
            }
        })
    }

    function resetForm () {
        setInput({
            rate: 0,
            comment: undefined,
        })
    }

    function handleSubmit (e) {
        e.preventDefault();

        console.log(input)

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.post(`${API_URL}/api/ratings`, input, config).then(() => rated()).catch(() => error())
        
        setInput({
            rate: 0,
            comment: undefined,
        })
    }

    // console.log(input)

    // console.log(input)

    return (
        <div className={`${styles.container} dark:bg-slate-900`}>
            <ToastContainer />
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>

                <div>
                    <label className={styles.label}>Rate:</label>
                    <ul className={styles.stars}>
                        {[...Array(input?.rate === 0 ? 0 : input?.rate)]?.map((e, i) =>
                            <li>
                                <img src={full} value={1 + 1} key={i + 1} alt="nope" className={styles.fullStar} onClick={() => handleClick(i + 1)} />
                            </li>)}
                        {[...Array(input.rate === 0 ? 5 : 5 - input.rate)]?.map((e, i) =>
                            <li>
                                <img src={empty} value={1 + input?.rate + i} key={i} alt="nope" className={styles.emptyStar} onClick={() => handleClick(i + 1 + input?.rate)} />
                            </li>)}
                    </ul>
                </div>

                <div className={styles.inputDiv}>
                    <label className={styles.label}>Review:</label>
                    <textarea className={`${styles.input} dark:text-black`} type='text' value={input.comment} onChange={handleChange} />
                </div>
                <div  className={styles.label2}>
                <button type='submit'>
                    Submit rate
                </button>
                </div>
            </form>
        </div>
    )
}
