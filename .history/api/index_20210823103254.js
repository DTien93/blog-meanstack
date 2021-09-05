const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/lama", (req, res) => {
    console.log("Home is start")
})

app.listen("5000", () => {
    console.log("Back end is running")
})
