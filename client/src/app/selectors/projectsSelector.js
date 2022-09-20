const getProjectsAction = (state) => state.projectsSlice.projectsAction

export const getProjects = (state) => getProjectsAction(state).projects
