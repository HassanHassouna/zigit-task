import actionTypes from "../actions/constants"

const initialState = {
  projects: [],
  project: {},
}

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECTS_SUCCESS: {
      const { projects } = action
      return { ...state, projects: projects }
    }

    case actionTypes.GET_PROJECT_SUCCESS: {
      const { project } = action
      return { ...state, project: project }
    }

    case actionTypes.ADD_PROJECT_SUCCESS: {
      const { project } = action
      return { ...state, projects: [...state.projects, project] }
    }

    default:
      return state
  }
}

export default projectsReducer
