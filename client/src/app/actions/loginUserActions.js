import actionTypes from "./constants"
import Api from "../../services/api"

const loginUserSuccessAction = (token) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  token,
})

const loginUserRequestAction = () => ({
  type: actionTypes.LOGIN_USER_REQUEST,
})

const loginUserFailureAction = () => ({
  type: actionTypes.LOGIN_USER_FAILURE,
})

const loginUserAction = (email, password) => async (dispatch) => {
  dispatch(loginUserRequestAction())
  try {
    const token = await Api.getUserByEmailAndPassowrd(email, password)
    if (token) {
      dispatch(loginUserSuccessAction(token))
      localStorage.setItem("jwtToken", token)
    } else dispatch(loginUserFailureAction())
  } catch (err) {
    console.log("err:", err)
    dispatch(loginUserFailureAction())
  }
}

export default loginUserAction
