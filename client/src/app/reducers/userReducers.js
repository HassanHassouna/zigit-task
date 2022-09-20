import actionTypes from "../actions/constants"

const initialState = {
  token: "",
  isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS: {
      const { token } = action
      return { ...state, token: token, isLoggedIn: true }
    }

    default:
      return state
  }
}

export default userReducer
