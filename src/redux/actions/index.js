import axios  from "axios"
export const GENERIC = 'GENERIC'
export const DATAPROFILE ='DATAFROFILE'

export const genericFunction = (input) => {
  return {
    type: GENERIC,
    payload: input
  }
}

export const dataProfile = ()=>{//esto es temporal necesita mandar un json como body al server para traer el perfil del user
    return async function(dispatch){
      const response = await axios.get('http://localhost:4000/api/user')
      dispatch({type: DATAPROFILE, payload: response.data[0]})
    };
}



