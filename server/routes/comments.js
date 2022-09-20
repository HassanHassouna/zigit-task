const commentRouter = require("express").Router()

const {
  addComment,
  getCommentsByProjectId,
  getComments,
} = require("../controllers/comments")

commentRouter.get("/:id", getCommentsByProjectId)
commentRouter.post("/", addComment)
commentRouter.get("/", getComments)

module.exports = commentRouter
