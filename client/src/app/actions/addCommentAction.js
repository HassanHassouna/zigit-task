import actionTypes from "./constants"
import Api from "../../services/api"

const addCommentSuccessAction = (comment) => ({
  type: actionTypes.ADD_COMMENT_SUCCESS,
  comment,
})

const addCommentRequestAction = () => ({
  type: actionTypes.ADD_COMMENT_REQUEST,
})

const addCommentFailureAction = () => ({
  type: actionTypes.ADD_COMMENT_FAILURE,
})

const addCommentAction = (newComment) => async (dispatch) => {
  dispatch(addCommentRequestAction())
  try {
    const comment = await Api.addComment(newComment)
    dispatch(addCommentSuccessAction(comment))
  } catch (err) {
    dispatch(addCommentFailureAction())
  }
}

export default addCommentAction
