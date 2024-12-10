const express = require("express")
const cors = require("cors")

const PORT = 3000
app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("hello world")
})

app.listen(PORT)