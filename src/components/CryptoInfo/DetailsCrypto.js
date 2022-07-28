import React from "react";
import { Link , useParams} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect } from "react";
import { getDetailsCrypto } from "../../redux/actions/index";
import CryptoChart  from "./CryptoChart"

// import styles from "../details/details.module.css"

export default function Details(){
    
    const dispatch = useDispatch()
    const cryptoId = useParams()
    const detailCrypto = useSelector((state) => state.detailsCrypto) 
    
    
    useEffect(() => {
        dispatch(getDetailsCrypto(cryptoId.id))
    },[])

    console.log(detailCrypto[0].name)
    return (
        
            <div>
                {/* <CryptoChart date={detailCrypto[1]} name={detailCrypto[0].name}/>  */}
              <>
               <div>
                    <h1>{detailCrypto[0].name}</h1>
                    <h1>{detailCrypto[0].symbol}</h1>
                    
                   <h1>${detailCrypto[0].market_data.current_price.usd}</h1>
                    <h1>%{detailCrypto[0].market_data.ath_change_percentage.usd}</h1>
                     <a href={detailCrypto[0].links.homepage}>link to {detailCrypto[0].name}</a>
                    <p>{detailCrypto[0].description.en}</p>
                </div>       
             <Link to="/cryptosmarket">
                <button>Volver</button>
             </Link>
            </>
            </div>
    )

}