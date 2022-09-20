import actionTypes from "../actions/constants"

const initialState = {
  isLoading: false,
  isError: false,
}

const viewReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECTS_REQUEST:
    case actionTypes.GET_PROJECT_REQUEST:
    case actionTypes.ADD_PROJECT_REQUEST:
    case actionTypes.LOGIN_USER_REQUEST: {
      return { ...state, isLoading: true }
    }

    case actionTypes.LOGIN_USER_SUCCESS:
    case actionTypes.GET_PROJECTS_SUCCESS:
    case actionTypes.GET_PROJECT_SUCCESS:
    case actionTypes.ADD_PROJECT_SUCCESS: {
      return { ...state, isError: false, isLoading: false }
    }

    case actionTypes.LOGIN_USER_FAILURE:
    case actionTypes.GET_PROJECTS_FAILURE:
    case actionTypes.GET_PROJECT_FAILURE:
    case actionTypes.ADD_PROJECT_FAILURE: {
      return { ...state, isLoading: false, isErorr: true }
    }
    default:
      return state
  }
}

export default viewReducers
