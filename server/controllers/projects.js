const projectsService = require("../services/projects")

const getProjects = async (req, res) => {
  try {
    let projects = await projectsService.getProjects()
    return res.status(200).json(projects)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

const getProjectById = async (req, res) => {
  try {
    let project = await projectsService.getProjectById(req.params.id)
    return res.status(200).json(project)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

const addProject = async (req, res) => {
  const projectObject = req.body
  console.log("projectObject:", projectObject)
  try {
    let project = await projectsService.addProject(projectObject)
    return res.status(200).json(project)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

module.exports = {
  getProjects,
  getProjectById,
  addProject,
}
