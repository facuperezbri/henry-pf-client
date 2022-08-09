import React, { useState } from 'react';
import styles from './Slides.module.css'


export default function Slideshow({ratings}) {
    console.log("eee",ratings)

    const [show, setShow] = useState(ratings[0]?.comment)
    const [view,SetView] = useState(ratings)
    const [next, setNext] = useState(0)
    // function onClickPrev () {
    //     for (let i=ratings?.length; i>=0; i--) {
    //         if (ratings[i]?.comment === ratings[0]?.comment) {
    //             return setShow(ratings[ratings?.length-1]?.comment)
    //         }
    //         if (ratings[i]?.comment === show) {
    //             return setShow(ratings[i-1]?.comment)
    //         }
    //     }
    // }
    setTimeout(function(){
        for (let i=0; i<=ratings?.length; i++) {
                    if (i === ratings?.length - 1) {
                        return setShow(ratings[0]?.comment)
                    }
                    if (ratings[i]?.comment === show) {
                        return setShow(ratings[i+1]?.comment)
                    }
                }

    }, 4000);
    

    // function onClickNext () {
    //     for (let i=0; i<=ratings?.length; i++) {
    //         if (i === ratings?.length - 1) {
    //             return setShow(ratings[0]?.comment)
    //         }
    //         if (ratings[i]?.comment === show) {
    //             return setShow(ratings[i+1]?.comment)
    //         }
    //     }
    // }
    

    return (
        <div className={styles.slide}>
            {/* <button onClick={() => onClickPrev()}>Previous</button> */}
            {show}
            {/* <button onClick={() => onClickNext()}>Next</button> */}
        </div>
    )
}

