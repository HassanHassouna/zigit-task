const express = require("express")
const router = express.Router()
const user = require("./car")
const project = require("./reservation")
const comment = require("./user")

router.use("/user", user)
router.use("/project", project)
router.use("/comment", comment)

module.exports = router
