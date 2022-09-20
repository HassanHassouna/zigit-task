import actionTypes from "../actions/constants"

const initialState = {
  comments: [],
  comment: {},
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS_SUCCESS: {
      const { comments } = action
      return { ...state, comments: comments }
    }
    case actionTypes.ADD_COMMENT_SUCCESS: {
      const { comment } = action
      return { ...state, comments: [...state.comments, comment] }
    }
    case actionTypes.GET_COMMENTS_BY_ID_REQUEST: {
      return { ...state, comments: [] }
    }
    case actionTypes.GET_COMMENTS_BY_ID_SUCCESS: {
      const { comments } = action
      return { ...state, comments: comments }
    }

    default:
      return state
  }
}

export default commentsReducer
