import { GET_CATEGORY, GET_MOVEMENT, GET_USER } from '../actions'


const initialState = {
  categories: [],
  movements: [],
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
    case GET_FAVORITE:
      return {
        ...state,
        favourites: state.favourites.concat(action.payload)
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favourites: state.favourites.filter(e => {
          return e.id !== action.payload
        })
      }
    case POST_FAVORITE:
        return {
          ...state
        }

    default:
      return state
  };
}

export default rootReducer
