const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    }).
    then(console.log("Connect to MongoDB"))


app.use("/lama", (req, res) => {
    console.log("Home is start")
})

app.listen("5000", () => {
    console.log("Back end is running")
})
