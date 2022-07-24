import { GET_CATEGORY, GET_MOVEMENT, GET_USER ,POST_MOVEMENT} from '../actions'


const initialState = {
  categories: [],
  movements: [],
  userData: [],
  allCryptos: [],
  allNews: [],
  dataProfile: [],
<<<<<<< HEAD
  detailsCrypto: []
=======
  infoMovement:""
>>>>>>> 5c619c8691fde79add25bd6a536473bf4fc455be
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
      case "ORDER_CRYPTO_ABC":

        const sortedCryptosABC = action.payload === "Asc" ? state.allCryptos.sort((a, b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()){
                return 1
            }
            if(b.name.toLowerCase() > a.name.toLowerCase()){
                return -1
            }
            return 0
        }) : state.allCryptos.sort((a, b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()){
                return -1
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()){
                return 1
            }
            return 0
        }) 
        return {
          ...state,
          allCryptos: sortedCryptosABC
      }
      case "GET_DETAILS_CRYPTO":
            return {
                ...state,
                detailsCrypto: action.payload
            }
      case "ORDER_CRYPTO_PRICE":
        const sortedCryptosPrice = action.payload === "Asc" ? state.allCryptos.sort((a, b) => {
          return parseFloat(b.currentPrice) - parseFloat(a.currentPrice)
        }) : state.allCryptos.sort((a, b) => {
          return parseFloat(a.currentPrice) - parseFloat(b.currentPrice)
        })
        return {
            ...state,
            allCryptos: sortedCryptosPrice
        }
      case POST_MOVEMENT:
        return {
          ...state,
          infoMovement: action.payload
        }
    default:
      return state
  };
}

export default rootReducer
