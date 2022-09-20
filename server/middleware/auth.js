const userService = require("../services/user")

module.exports = async function auth(req, res, next) {
  console.log("->authMiddleWare->")
  let email = req.body.email
  let password = req.body.password
  console.log("req body", req.body)
  const user = await userService.getUserByEmailAndPassword(email, password)
  if (!user) {
    // throw new Error("User not found")
    console.log("authorization failed")
    return res.status(200).send({})
  }
  console.log("authorization success")
  return next()
}
