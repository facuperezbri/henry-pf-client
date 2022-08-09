import axios from 'axios'
import { GET_USER_DATA } from '../../services/GET_USER_DATA'
import { GET_CATEGORY_SERVICE } from '../../services/GET_CATEGORY_SERVICE'
import { GET_MOVEMENT_SERVICE } from '../../services/GET_MOVEMENTS_SERVICE'
import { API_URL } from '../../services/API'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useToken } from '../../hooks/useToken'


export const GENERIC = 'GENERIC'
export const DATAPROFILE ='DATAFROFILE'
export const CHANGEPROFILE = 'CHANGEPROFILE'
export const GET_USER = 'GET_USER'
export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_MOVEMENT = 'GET_MOVEMENT'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITE = 'GET_FAVORITE'
export const POST_FAVORITE = 'POST_FAVORITE'
export const POST_MOVEMENT ='POST_MOVEMENT'
export const GET_RATINGS ='GET_RATINGS'
export const OPEN_RATE ='OPEN_RATE'
export const CLOSE_RATE ='CLOSE_RATE'
export const CLOSE_CHATBOT ='CLOSE_CHATBOT'
export const DARK_MODE = 'DARK_MODE '

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
      // console.log(data)
      return dispatch({
        type: GET_MOVEMENT,
        payload: data.movements
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCryptos = () => {
  return async function (dispatch) {
    try {
      let info = await axios.get(`${API_URL}/api/currency/crypto`)
      // console.log(info.data)
      return dispatch({
        type: 'GET_CRYPTO',
        payload: info.data
      })
    } catch (e) {
      console.error(e)
    }
  }
}


export function getFavorite() {
  const token = window.localStorage.getItem('token')
  return async function(dispatch){
    await axios.get(`${API_URL}/api/favourites/`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((fav)=>{
      // console.log(fav.data)
      return dispatch({
      type: GET_FAVORITE,
      payload: fav.data
    })}).catch((error)=>{console.log(error)})
  }
}

export function addFavorite(username) {
  const token = window.localStorage.getItem('token')
  console.log(username, token)
  return async function(dispatch){
    const favouriteCreated = await axios.post(`${API_URL}/api/favourites/addFavorite`,{
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        username
      }
    })
    return dispatch({ type: POST_FAVORITE,
      payload: favouriteCreated.data
      })
  }
}

export function removeFavorite(id) {
  const token = window.localStorage.getItem('token')

  return async function(dispatch){
    const favouriteRemoved = await axios.delete(`${API_URL}/api/favourites/removeFavorite`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        friendID: id
      }
    })
    return dispatch({type: REMOVE_FAVORITE,
    payload: id})
  }
}
    
export function getRatings() {
  return async function (dispatch) {
    try {
      let ratings = await axios.get(`${API_URL}/api/ratings`)
      return dispatch({
        type: GET_RATINGS,
        payload: ratings.data
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export function openRate() {
  return {
    type: OPEN_RATE,
    payload: true
  }
}

export function closeRate() {
  return {
    type: CLOSE_RATE,
    payload: false
  }
}

export function getDetailsCrypto(id) {
  return async function(dispatch){
      try{
        let info = await axios.get(`${API_URL}/api/currency/${id}`)
        // console.log('entre')
        return dispatch({
          type: "GET_DETAILS_CRYPTO",
          payload: info.data
        })
      } catch (e){
        const message = () => toast.error("Error no carga los detalles")
          console.error(e)
          message()
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
      const response = await axios.post(`${API_URL}/api/movement/make_a_movement`,obj)
      return dispatch({type:POST_MOVEMENT, payload:response.data})
  }   

}

export const resetCrypto = ()=>{
  return {
    type: "RESET_CRYPTO",
  }  
}
export const closeChatBot = ()=>{
  return {
      type: CLOSE_CHATBOT,
  }
}

export const darkMode = (info)=>{
  return  {
    type: DARK_MODE, payload:info
  }
}