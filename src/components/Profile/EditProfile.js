import React, { useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useParams,useNavigate} from 'react-router-dom'
import {changeProfile} from '../../redux/actions/index'

const verifyError =(e)=>{
  let em ={}
  // if (e.type=== "text"&&!/[^a-zA-Z\x20]/g.test(e.value)){
  //   em.error = "debes ingresar un nombre" 
  //  }
    if (e.type=== "email"&&!/\S+@\S+\.\S+/.test(e.value)){
     em.error = "debes ingresar un corro" 
    }
    if (e.type=== "number"&&!/^[1-9][0-9]{7,8}$/g.test(e.value)){
      em.error = "debes ingresar un DNI" 
     }
 
  return em
}
export default function EditProfile() {
    const [error,setError] = useState(false)
    const navigate = useNavigate()  
    const dispatch = useDispatch()
    const {id} = useParams()
    let strinParams = id.split(":")[0].toLowerCase();
    const data = useSelector((state)=>state.dataProfile)
    const [change, setChange]= useState({
       id:data.id,
      [strinParams]:""
    })
  const changeUser = (e)=>{
    console.log(e.target.type)
    setChange({...change,[strinParams]:e.target.value})
    setError(verifyError(e.target))
    
  }
  useEffect(()=>{
    if(change[strinParams] === ""){
      setError(false)
    }
  },[change])
  //--------------------------------------------------------
  const typeInput = ()=>{
    if(strinParams === "name" ||  strinParams === "username"){
    return  <input  type="text" onChange={(e)=>changeUser(e)} value={change[strinParams]}/>  
    } 
    if(strinParams === "email"){
     return  <input  type="email" onChange={(e)=>changeUser(e)} value={change[strinParams]}/>  
    }
    if(strinParams === "dni"){
     return  <input  type="number" onChange={(e)=>changeUser(e)} value={change[strinParams]}/>  
    }

  }
  const sendChange=(e)=>{
    e.preventDefault()
    dispatch(changeProfile(change))
    alert("los datos fueron enviados con exito")
    navigate("/home")
  }
  return (
    <form onSubmit={(e)=>changeUser(e)}>
        <div>
            <h1>{id}</h1>
            {typeInput()}
            {error? <p>{error.error}</p>:null}
          
            <button disabled={error ?false : true} onClick={(e)=>sendChange(e)}>change</button>
        </div>
    </form>
  )
}
