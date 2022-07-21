import { GET_USER } from '../actions'


const initialState = {
  userData: [],
  allCryptos: [],
  allNews: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userData: action.payload
      }
    case "GET_CRYPTO":
      return {
        ...state,
        allCryptos: action.payload
      }

    default:
      return state
  };
}

export default rootReducer
