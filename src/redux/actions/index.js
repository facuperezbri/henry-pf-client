import axios from 'axios'
import { GET_USER_DATA } from '../../services/GET_USER_DATA'
import { GET_CATEGORY_SERVICE } from '../../services/GET_CATEGORY_SERVICE'

export const GET_USER = 'GET_USER'
export const GET_CATEGORY = 'GET_CATEGORY'

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
