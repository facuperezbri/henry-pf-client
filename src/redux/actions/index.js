import axios from 'axios'

export const GENERIC = 'GENERIC'
export const DATAPROFILE ='DATAFROFILE'
export const CHANGEPROFILE = 'CHANGEPROFILE'

export const genericFunction = (input) => {
  return {
    type: GENERIC,
    payload: input
  }
}

export const dataProfile = ()=>{//esto es temporal necesita mandar un json como body al server para traer el perfil del user
  let config = {
    headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJhOWE1MjhkMS01MjQxLTQ5MGItYjRlNS00MGIyYjI3MDE3ZTAiLCJpYXQiOjE2NTg0MzIwOTQsImV4cCI6MTY1ODQzNTY5NH0.ZMvXvrrWccGz2RBCp_cyMPESlpECy92a1qRgTd7hApI"
    }
  }
  return async function(dispatch){
      const response = await axios.get('http://localhost:4000/api/user',config)
      dispatch({type: DATAPROFILE, payload: response.data})
    };
}

export const changeProfile = (objeto) => {
   return async function(dispatch){
    const response = await axios.put('http://localhost:4000/api/user/useredit',objeto)
    dispatch({type:CHANGEPROFILE , payload: response.data})
  } 
  
}



export const getCrypto = () => {
  return async function(dispatch) {
    try {
        let info = await axios.get("http://localhost:4000/api/currency/crypto")
        console.log(info.data)
        return dispatch({
            type: "GET_CRYPTO",
            payload: info.data
        })
    } catch (e) {
        console.error(e)
    }
}
}
