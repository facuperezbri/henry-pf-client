import { GET_CATEGORY, GET_USER } from '../actions'


const initialState = {
  categories: [],
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
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload
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
