const { Op } = require("sequelize")
const { User } = require("../db/models")
const jwt = require("jsonwebtoken")

class UserService {
  getUserByEmailAndPassword = async (email, password) => {
    console.log("->getUserByEmailAndPassword func->")
    return await User.findOne({
      where: {
        email: {
          [Op.like]: email,
        },
        password: {
          [Op.like]: password,
        },
      },
    })
  }

  generateToken = async (user) => {
    console.log("->generateToken func->")
    const values = user.dataValues
    let token = jwt.sign(
      {
        id: values.id,
        email: values.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    )
    return token
  }
}
module.exports = new UserService()
