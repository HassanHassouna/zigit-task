const userRouter = require("express").Router()

const { getUserByEmailAndPassword } = require("../controllers/user")

userRouter.post("/auth", getUserByEmailAndPassword)

module.exports = userRouter
