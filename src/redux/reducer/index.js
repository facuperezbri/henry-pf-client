import { GENERIC, DATAPROFILE, CHANGEPROFILE } from '../actions'

const initialState = {
  globalState1: [],
  globalState2: [],
  dataProfile: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERIC:
      return {
        ...state,
        globalState1: action.payload,
        globalState2: action.payload
      }
    case DATAPROFILE:
      console.log("entrando")
      return{
        ...state,
        dataProfile:action.payload
      }
    case CHANGEPROFILE:
      return {
        ...state,
        dataProfile: action.payload
      }
    default:
      return state
  };
}

export default rootReducer
