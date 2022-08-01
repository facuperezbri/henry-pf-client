import React,{useState} from 'react'
import style from './EditPassword.module.css'
import axios from "axios"
import { useToken } from '../../hooks/useToken'

const validate = (input,name)=>{
    const errors = {}

    if(!input.password && name === 1){
        errors.password = "password is requeried"
        if(name === 1){
            errors.input1 = true
        }
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(input.password) && name === 1){
        errors.password = "password is invalid enter a valid password"
        if(name === 1){
            errors.input1 = true
        }
    }
//-------------------------------------------------------------------------------------------------------------------------------------------
    if(!input.password && name === 2){
        errors.password = "password is requeried"
        if(name === 2){
            errors.input2 = true
        }
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(input.password) && name === 2){
        errors.password = "password is invalid enter a valid password"
        if(name === 2){
            errors.input2 = true
        }
    }
   return errors
}


export default function EditPassword({dataProfile,setVisible}) {
    const { token } = useToken();
    const password = dataProfile.password;
    const [putPassword,setPutPassword] = useState({
      password:password,
})
    const [comparate,setComparate] = useState({
       password:""
    })
    const [error, setError] = useState([])



const handleChange = (e)=>{
    if(e.target.id === "ss"){
        setComparate({
            ...comparate,
            [e.target.name]:e.target.value
        })
        setError(validate({
            ...comparate,
            [e.target.name]:e.target.value
        },1
        ))
    }
    if(e.target.id === "sss"){
        setPutPassword({
          ...putPassword,
          [e.target.name]:e.target.value
        })
        setError(validate({
        ...putPassword,
        [e.target.name]:e.target.value
    },2
    ))
}
   
}
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const sendPutPassword = async()=>{
    if(putPassword.password !== comparate.password){
        return alert("password invalid")
    }    
    await axios.put("http://localhost:4000/api/user/useredit",putPassword,config)
    const element = document.querySelector("#sss")
    element.innerHTML=""
      setVisible(false) 
      alert("data uploaded successfully")
  }

  const cancelX=()=>{
    setVisible(false)
  }




  return (
    <div className={style.container}> 
      <div className={style.containerX}>
        <div onClick={cancelX} className={style.X}>X</div>  
      </div> 
        <input className={error.input1 ? style.inputError: style.input} id="ss" type="password" name='password'  placeholder='new password' onChange={handleChange}/>
        {error.input1 && (<p style={{color:"red"}} >{error.password}</p>)}
        <input className={error.input2 ? style.inputError: style.input} id="sss" type="password" name='password' placeholder='repeat your new password' onChange={handleChange}/>
        {error.input2 && (<p style={{color:"red"}} >{error.password}</p>)}
        <button disabled={error.password ? true: false} onClick={sendPutPassword}>Send</button>
    </div>
  )
}
