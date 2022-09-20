const express = require("express")
const cors = require("cors")
const compression = require("compression")
const bodyParser = require("body-parser")
const api = require("./routes/api")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || "8000"

app.use([compression()])
app.use(cors({ origin: "http://localhost:3000" }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", api)

app.listen(PORT, () => console.log(`App is Up on port ${PORT}`))
module.exports = app
