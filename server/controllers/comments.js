const commentsService = require("../services/comments")

const getCommentsByProjectId = async (req, res) => {
  try {
    let comments = await commentsService.getCommentsByProjectId(req.params.id)
    return res.status(200).json(comments)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

const addComment = async (req, res) => {
  const commentObject = req.body
  console.log("commentObject:", commentObject)
  try {
    let comment = await commentsService.addComment(commentObject)
    return res.status(200).json(comment)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

const getComments = async (req, res) => {
  try {
    let comments = await commentsService.getComments()
    return res.status(200).json(comments)
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

module.exports = {
  getCommentsByProjectId,
  addComment,
  getComments,
}
