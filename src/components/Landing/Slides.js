import React, { useState } from 'react';
import styles from './Slides.module.css'


export default function Slideshow({ratings}) {
    

    const [show, setShow] = useState(ratings[0]?.comment)

    function onClickPrev () {
        for (let i=ratings?.length; i>=0; i--) {
            if (ratings[i]?.comment === ratings[0]?.comment) {
                return setShow(ratings[ratings?.length-1]?.comment)
            }
            if (ratings[i]?.comment === show) {
                return setShow(ratings[i-1]?.comment)
            }
        }
    }

    function onClickNext () {
        for (let i=0; i<=ratings?.length; i++) {
            if (i === ratings?.length - 1) {
                return setShow(ratings[0]?.comment)
            }
            if (ratings[i]?.comment === show) {
                return setShow(ratings[i+1]?.comment)
            }
        }
    }
    

    return (
        <div className={styles.slide}>
            <button onClick={() => onClickPrev()}>Previous</button>
            {show}
            <button onClick={() => onClickNext()}>Next</button>
        </div>
    )
}

