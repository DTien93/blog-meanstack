const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.use("/lama", (req, res) => {
    console.log("hey this is")
})

app.listen("5000", () => {
    console.log("Back end is running")
})
