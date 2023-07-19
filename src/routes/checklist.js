const express = require("express")

const app = express()

const router = express.Router()

app.use(express.json())

router.get("/", (req, res) => {
  console.log("CHECKLISTS")
  res.send()
})

module.exports = router
