import actionTypes from "./constants"
import Api from "../../services/api"

const getProjectsSuccessAction = (projects) => ({
  type: actionTypes.GET_PROJECTS_SUCCESS,
  projects,
})

const getProjectsRequestAction = () => ({
  type: actionTypes.GET_PROJECTS_REQUEST,
})

const getProjectsFailureAction = () => ({
  type: actionTypes.GET_PROJECTS_FAILURE,
})

const getProjectsAction = () => async (dispatch) => {
  dispatch(getProjectsRequestAction())
  try {
    const projects = await Api.getProjects()
    if (projects) dispatch(getProjectsSuccessAction(projects))
    else dispatch(getProjectsFailureAction())
  } catch (err) {
    console.log("err:", err)
    dispatch(getProjectsFailureAction())
  }
}

export default getProjectsAction
