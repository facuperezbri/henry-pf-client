import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import style from './DetailProfile.module.css'


export default function DetailProfile() {
    
    const data = useSelector((state)=>state.dataProfile)
  return (
    <div>
        <section className={style.container}>
           <Link to="/editProfile"><div className={style.select}><h2>name: {data.name}</h2></div> </Link> 
           <Link to="/editProfile"><div className={style.select}><h2>DNI: {data.dni}</h2></div></Link>    
           <Link to="/editProfile"><div className={style.select}><h2>email: {data.email}</h2></div></Link>    
           <Link to="/editProfile"><div className={style.select}><h2>username: {data.username}</h2></div></Link> 
        </section>
    </div>
  )
}
