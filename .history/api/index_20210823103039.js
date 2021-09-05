const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.use("/lama", (req, res) => {
    console.log("Home is start")
})

app.listen("5000", () => {
    console.log("Back end is running")
})
