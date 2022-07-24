import axios from 'axios'
import { GET_USER_DATA } from '../../services/GET_USER_DATA'
import { GET_CATEGORY_SERVICE } from '../../services/GET_CATEGORY_SERVICE'
import { GET_MOVEMENT_SERVICE } from '../../services/GET_MOVEMENTS_SERVICE'



export const GENERIC = 'GENERIC'
export const DATAPROFILE ='DATAFROFILE'
export const CHANGEPROFILE = 'CHANGEPROFILE'
export const GET_USER = 'GET_USER'
export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_MOVEMENT = 'GET_MOVEMENT'
export const POST_MOVEMENT ='POST_MOVEMENT'

export const getUser = (token) => {
  return async function (dispatch) {
    try {
      let data = await GET_USER_DATA(token)
      return dispatch({
        type: GET_USER,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const dataProfile = (toquen)=>{//esto es temporal necesita mandar un json como body al server para traer el perfil del user
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


export const getCategory = () => {
  return async function (dispatch) {
    try {
      let data = await GET_CATEGORY_SERVICE()
      return dispatch({
        type: GET_CATEGORY,
        payload: data
      })
    } catch (error) {

    }
  }
}

export const getMovements = (cvu) => {
  return async function (dispatch) {
    try {
      let data = await GET_MOVEMENT_SERVICE(cvu)
      return dispatch({
        type: GET_MOVEMENT,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCryptos = () => {
  return async function (dispatch) {
    try {
      let info = await axios.get("http://localhost:4000/api/currency/crypto")
      console.log(info.data)
      return dispatch({
        type: 'GET_CRYPTO',
        payload: info.data
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export function getDetailsCrypto(id) {
  return async function(dispatch){
      try{
          let info = await axios.get(`http://localhost:4000/api/currency/${id}`)
          console.log(info)
          return dispatch({
              type: "GET_DETAILS_CRYPTO",
              payload: info.data
          })
      } catch (e){
          console.error(e)
          alert("Error no carga los detalles")
      }
  }
}
export function orderCryptoABC(payload) {
  return {
      type: "ORDER_CRYPTO_ABC",
      payload: payload
  }
}

export function orderCryptoPrice(payload) {
  return {
      type: "ORDER_CRYPTO_PRICE",
      payload: payload
  }
}



export const sendMovement =  (obj)=>{
  return async function(dispatch){
      const response = await axios.post("http://localhost:4000/api/movement/make_a_movement",obj)
      return dispatch({type:POST_MOVEMENT, payload:response.data})
  }   

}