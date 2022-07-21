import axios from 'axios'
import { GET_USER_DATA } from '../../services/GET_USER_DATA'

export const GET_USER = 'GET_USER'

export const getUser = (token) => {
  return async function (dispatch) {
    try {
      let data = await GET_USER_DATA(token)
      return {
        type: GET_USER,
        payload: data
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCrypto = () => {
  return async function (dispatch) {
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
