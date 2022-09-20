import actionTypes from "./constants"
import Api from "../../services/api"

const addProjectSuccessAction = (project) => ({
  type: actionTypes.ADD_PROJECT_SUCCESS,
  project,
})

const addProjectRequestAction = () => ({
  type: actionTypes.ADD_PROJECT_REQUEST,
})

const addProjectFailureAction = () => ({
  type: actionTypes.ADD_PROJECT_FAILURE,
})

const addProjectAction = (newProject) => async (dispatch) => {
  dispatch(addProjectRequestAction())
  try {
    const project = await Api.addProject(newProject)
    dispatch(addProjectSuccessAction(project))
  } catch (err) {
    dispatch(addProjectFailureAction())
  }
}

export default addProjectAction
