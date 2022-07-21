import React from 'react'
import style from './Nav.module.css'
import {Link} from "react-router-dom"
export default function Nav () {
  const itemalign = { display: 'flex', alignItems: 'center', gap:'1rem',cursor:"pointer"}
  return (
    <nav className={style.header}>
        <div >
        <h3>Wallet.</h3>
          <div className={style.itemsNav}>
            <div style={itemalign}><span><img src="https://res.cloudinary.com/salta/image/upload/v1658256761/Dashboard_ckbahv.svg" alt='0'/></span><Link style={{textDecoration:"none"}} to='/disponer'>Dashboard</Link></div>
            <div style={itemalign}><span><img src='https://res.cloudinary.com/salta/image/upload/v1658256798/Wallet_vfda4a.svg' alt='1'/></span><Link style={{textDecoration:"none"}} to='/disponer'>Wallet</Link></div>
            <div style={itemalign}><span><img src='https://res.cloudinary.com/salta/image/upload/v1658256871/News_gvb1i2.svg' alt='2'/></span><Link style={{textDecoration:"none"}} to='/disponer'>News</Link> </div>
            <div style={itemalign}><span><img src='https://res.cloudinary.com/salta/image/upload/v1658256900/Settings_julchm.svg' alt='3'/></span><Link  style={{textDecoration:"none"}}to='/disponer'>Settings</Link></div>
            <div style={itemalign}><span><img src='https://res.cloudinary.com/salta/image/upload/v1658256946/FAQ_vjzmyl.svg' alt='4'/></span><Link style={{textDecoration:"none"}} to='/disponer'>F.A.Q</Link></div>
          </div>
        </div>
           <div style={{marginBottom: "4rem",display: 'grid', gridTemplateColumns:'14% auto', alignItems: 'center', gap: '1rem', cursor: "pointer"}}><span style={{marginTop:"10px"}}><img src='https://res.cloudinary.com/salta/image/upload/v1658257582/logout_olueax.svg' alt='alt'/></span> Log out</div>
    </nav>
  )
}
