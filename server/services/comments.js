const { Op } = require("sequelize")
const { Comment } = require("../db/models")

class CommentService {
  getCommentsByProjectId = async (id) => {
    return await Comment.findAll({
      where: {
        project_id: {
          [Op.like]: id,
        },
      },
    })
  }

  addComment = async (comment) => {
    return await Comment.create(comment)
  }

  getComments = async () => {
    return await Comment.findAll()
  }
}

module.exports = new CommentService()
