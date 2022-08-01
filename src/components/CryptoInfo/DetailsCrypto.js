import React from "react";
import { Link , useParams} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { getDetailsCrypto, resetCrypto } from "../../redux/actions/index";
import CryptoChart  from "./CryptoChart"

// import styles from "../details/details.module.css"

export default function Details(){
    
    const dispatch = useDispatch()
    const cryptoId = useParams()
    const detailCrypto = useSelector((state) => state.detailsCrypto) 
   
    
    useEffect(() => {
        dispatch(getDetailsCrypto(cryptoId.id))
    }, [])

    const reset = () => {
        dispatch(resetCrypto())
    }
    if(detailCrypto.length === 0){
        return (<div>..loading</div>)
    }
    return (
            
            <div>
                 <CryptoChart date={detailCrypto.data2} name={detailCrypto.data?.name}/>
              <>
                <div>
                    <h1>{detailCrypto.data?.name}</h1>
                    <h1>{detailCrypto.data?.symbol}</h1>
                    
                   <h1>${detailCrypto.data?.market_data.current_price.usd}</h1>
                    <h1>%{detailCrypto.data?.market_data.ath_change_percentage.usd}</h1>
                     <a href={detailCrypto.data?.links.homepage}>link to {detailCrypto.data?.name}</a>
                    <p>{detailCrypto.data?.description.en}</p>
                </div> 
                    
              
             <Link to="/cryptosmarket">
                <button onClick={reset}>Volver</button>
             </Link>
            </>
            </div>
    )

}