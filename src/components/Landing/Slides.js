import React, { useState } from 'react';
import styles from './Slides.module.css'


export default function Slideshow({ratings}) {
    

    const [show, setShow] = useState(ratings[0]?.comment)
    function onClickSlide () {
        for (let i=0; i<=ratings?.length; i++) {
            if (i === ratings?.length - 1) {
                return setShow(ratings[0]?.comment)
            }
            if (ratings[i]?.comment === show) {
                return setShow(ratings[i+1]?.comment)
            }
        }


        if (ratings[ratings?.length - 1]?.comment === show) {
            setShow(ratings[0]?.comment)
        } else {
            setShow(ratings[1]?.comment)
        }
    }
    

    return (
        <div className={styles.slide} onClick={() => onClickSlide()}>
            {show}
        </div>
    )
}

