const getComments = (state) => state.comments

const getCommentsById = (state, id) => {
  return getComments(state).filter((comment) => comment.projectId === id)
}

export default getCommentsById