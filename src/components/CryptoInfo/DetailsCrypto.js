import React from "react";
import { Link , useParams} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { getDetailsCrypto, resetCrypto } from "../../redux/actions/index";
import CryptoChart  from "./CryptoChart"
import styles from './DetailsCrypto.module.css'
import loading from '../../assets/spinner/spinner.svg'

// import styles from "../details/details.module.css"

export default function Details(){
    
    const dispatch = useDispatch()
    const cryptoId = useParams()
    const detailCrypto =useSelector((state) => state.detailsCrypto) 
   
    
    useEffect(() => {
        dispatch(getDetailsCrypto(cryptoId.id))
    }, [])

    const reset = () => {
        dispatch(resetCrypto())
    }
    if(detailCrypto.length === 0){
        return  <div className={styles.loading} >
        <img src={loading} alt="Loading" />
      </div>
    }
    return (
            
        <div style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",width:"100%"}}>
          <CryptoChart amount={detailCrypto.data2} dates={detailCrypto?.data}/>
            

                <div style={{width:"25rem", display:"flex",flexDirection:"column", alignItems:"center", gap:"1rem"}}>
                    <h1>{detailCrypto.data?.name}</h1>
                    <h1>{detailCrypto.data?.symbol}</h1>
                    
                   <h1>${detailCrypto.data?.market_data.current_price.usd}</h1>
                    <h1>%{detailCrypto.data?.market_data.ath_change_percentage.usd}</h1>
                     <span style={{color:"green",fontSize:"1.5rem",fontWeight:"600"}}><a href={detailCrypto.data?.links.homepage}>link to {detailCrypto.data?.name}</a></span>
                </div> 
                    
              
             <Link to="/cryptosmarket">
                <button onClick={reset}>Volver</button>
             </Link>
            
            </div>
    )

}