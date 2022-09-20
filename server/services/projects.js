const { Op } = require("sequelize")
const { Project } = require("../db/models")

class ProjectService {
  getProjects = async () => {
    return await Project.findAll()
  }

  getProjectById = async (id) => {
    return await Project.findOne({
      where: {
        id: {
          [Op.like]: id,
        },
      },
    })
  }

  addProject = async (project) => {
    return await Project.create(project)
  }
}

module.exports = new ProjectService()
