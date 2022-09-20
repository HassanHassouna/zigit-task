import actionTypes from "./constants"
import Api from "../../services/api"

const getCommentsByIdSuccess = (comments) => ({
  type: actionTypes.GET_COMMENTS_BY_ID_SUCCESS,
  comments,
})

const getCommentsByIdRequest = () => ({
  type: actionTypes.GET_COMMENTS_BY_ID_REQUEST,
})

const getCommentsByIdFailure = () => ({
  type: actionTypes.GET_COMMENTS_BY_ID_FAILURE,
})

const getCommentsByIdAction = (id) => async (dispatch) => {
  dispatch(getCommentsByIdRequest())
  try {
    const comments = await Api.getCommentsByProjectId(id)
    dispatch(getCommentsByIdSuccess(comments))
  } catch (err) {
    dispatch(getCommentsByIdFailure())
  }
}

export default getCommentsByIdAction
