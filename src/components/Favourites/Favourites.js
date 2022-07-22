import React, { useEffect, useState} from 'react'
import style from './Favourites.module.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getFavorite, removeFavorite, addFavorite, getUser} from '../../redux/actions/index'



export default function Favorites(){
    const favourites = useSelector((state)=> state.favourites)
    const dispatch = useDispatch()
    const [input,setInput] = useState({favourites:[]})

    useEffect(()=>{
        dispatch(getUser(window.localStorage.getItem('token'))).then(r => dispatch(getFavorite(r.payload.id)))
    }, [])

    function handleSelect(e){
        e.preventDefault()
        setInput({...input, favourites:[...input.favourites, e.target.value]})
    }

    // let favourites = [{id:'998he9dh238947dbh38', friendID:'98e743hfdndkfsdj39787', userID:'sdfadfk394234234435'}]
    return(
        <div className={style.main}>
            <h1>My Friends</h1>
            <select value={input.favourites} onChange={e=>handleSelect(e)}>
                {favourites.map(fav=> 
                <option  key={fav.id}>
                {fav.username} {fav.accounts[0].cvu}   
                </option>
                  )
                }
            </select>
            
        </div>
    )
}