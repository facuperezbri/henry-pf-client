import React, { useEffect, useState } from 'react';
import styles from './Slides.module.css'
import {AiFillStar } from "react-icons/ai"


export default function Slideshow({ratings}) {
    // console.log("eee",ratings)

    const FilterRateTreeStar = ratings.filter(e=> e.rate >= 3)
    const [show, setShow] = useState({
        comment:FilterRateTreeStar[0]?.comment,
        rate:FilterRateTreeStar[0]?.rate,
        users:FilterRateTreeStar[0]?.users.profilepic})
    const [star,setStar] = useState([])
 useEffect(()=>{
        let i = 0
        let array = []
        while(i < show.rate){
            array.push(i)
        i++
        }
        return setStar(array)
        
    },[show])
    setTimeout(function(){
        for (let i=0; i<=FilterRateTreeStar?.length; i++) {
                    if (i === FilterRateTreeStar?.length - 1 ) {
                        return setShow({...show,
                            comment:FilterRateTreeStar[0]?.comment,
                            rate:FilterRateTreeStar[0]?.rate,
                            users: FilterRateTreeStar[0]?.users.profilepic,                        
                        })  
                    }
                    if (FilterRateTreeStar[i]?.comment === show.comment) {
                        return setShow({...show,
                            comment:FilterRateTreeStar[i+1]?.comment,
                            rate:FilterRateTreeStar[i+1]?.rate,
                            users: FilterRateTreeStar[i+1]?.users.profilepic,                         
                        })
                    }
                }

    }, 4555);
      

    return (
        <div className={styles.slide}> 
            
            <div className={styles.profile}><img className={styles.img} alt="profile" src={show.users}/>{show.comment} </div>
            <section className={styles.star}>{star?.map(e=><h2><AiFillStar/></h2>)}</section>
        </div>
    )
}

