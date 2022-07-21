import { GENERIC } from '../actions'

const initialState = {
  globalState1: [],
  globalState2: [],
  allCryptos: [],
  allNews: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERIC:
      return {
        ...state,
        globalState1: action.payload,
        globalState2: action.payload
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
