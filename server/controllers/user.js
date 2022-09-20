const userService = require("../services/user")

const getUserByEmailAndPassword = async (req, res) => {
  console.log("->getUserByEmailAndPassword func->")
  let email = req.body.email
  let password = req.body.password
  try {
    let user = await userService.getUserByEmailAndPassword(email, password)
    if (!user) {
      return res.status(200).json({ token: null })
    }
    let token = await userService.generateToken(user)
    return res.status(200).json({ token })
  } catch (err) {
    console.log(err)
    return res.status(404).json(err.message)
  }
}

module.exports = {
  getUserByEmailAndPassword,
}
