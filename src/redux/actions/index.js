import axios from 'axios'

export const GENERIC = 'GENERIC'

export const genericFunction = (input) => {
  return {
    type: GENERIC,
    payload: input
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
