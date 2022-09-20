const userRouter = require("express").Router()

const {
  addProject,
  getProjects,
  getProjectById,
} = require("../controllers/projects")

userRouter.get("/", getProjects)
userRouter.get("/:id", getProjectById)
userRouter.post("/", addProject)

module.exports = userRouter