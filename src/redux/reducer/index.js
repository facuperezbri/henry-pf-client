import { GET_CATEGORY, GET_MOVEMENT, GET_USER ,CHANGEPROFILE,DATAPROFILE} from '../actions'


const initialState = {
  categories: [],
  movements: [],
  userData: [],
  allCryptos: [],
  allNews: [],
  dataProfile: [],
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
    case GET_MOVEMENT:
      return {
        ...state,
        movements: action.payload
      }
    case 'GET_CRYPTO':
      return {
        ...state,
        allCryptos: action.payload
      }

    default:
      return state
  };
}

export default rootReducer
