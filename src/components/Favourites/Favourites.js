import React from 'react'
import style from './Favourites.module.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Favorites(){
    const favourites = useSelector((state)=> state.favourites)
    console.log(favourites)
    // let favourites = [{id:'998he9dh238947dbh38', friendID:'98e743hfdndkfsdj39787', userID:'sdfadfk394234234435'}]
    return(
        <div className={style.main}>
            <h1>My Friends</h1>
            {favourites.map(fav=> <div key={fav.id}>{fav.friendID}</div> )
                }
        </div>
    )
}