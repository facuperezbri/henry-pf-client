import React from "react";
import { Link , useParams} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect} from "react";
import { getDetailsCrypto } from "../../redux/actions/index";
// import styles from "../details/details.module.css"

export default function Details(){
    
    const dispatch = useDispatch()
    const cryptoId = useParams()
    const detailCrypto = useSelector((state) => state.detailsCrypto) 
    
    useEffect(() => {
        dispatch(getDetailsCrypto(cryptoId.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   console.log(cryptoId.id)
   console.log(detailCrypto)


    return (
        
            <div>
            {
                (detailCrypto.length === 0) ? 
                    <div >
                        <p>Loading ...</p>
                    </div> 
                : <><div>
                    <h1>{detailCrypto.name}</h1>
                    <h1>{detailCrypto.symbol}</h1>
                </div>
                   
            <Link to="/home">
                <button>Volver</button>
            </Link>
            </>
                 
                    
                
            }
            </div>
            
    )

}