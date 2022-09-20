const express = require("express")
const router = express.Router()
const user = require("./user")
const project = require("./projects")
const comment = require("./comments")
const auth = require("../middleware/auth")

router.use("/api/user", auth, user)
router.use("/api/project", project)
router.use("/api/comment", comment)

module.exports = router
