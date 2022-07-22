import axios from 'axios'
import { GET_USER_DATA } from '../../services/GET_USER_DATA'
import { GET_CATEGORY_SERVICE } from '../../services/GET_CATEGORY_SERVICE'
import { GET_MOVEMENT_SERVICE } from '../../services/GET_MOVEMENTS_SERVICE'

export const GET_USER = 'GET_USER'
export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_MOVEMENT = 'GET_MOVEMENT'

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

export function getFavorite() {
  return async function(dispatch){
    await axios.get('http://localhost:4000/api/favourites').then((fav)=>{return dispatch({
      type: GET_FAVORITE,
      payload: fav.data
    })}).catch((error)=>{console.log(error)})
  }
}

export function addFavorite(payload) {
  return async function(dispatch){
    const favouriteCreated = await axios.post('http://localhost:4000/api/favourites/createFavourites',payload)
    return dispatch({ type: POST_FAVORITE,
      payload: favouriteCreated})
  }
}

export function removeFavorite(id) {
  return async function(dispatch){
    const favouriteRemoved = await axios.delete('http://localhost:4000/api/favourites/delete', id)
    return dispatch({type: REMOVE_FAVORITE,
    payload: favouriteRemoved})
  }
}