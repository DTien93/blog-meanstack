const express = require("express")
const app = express()

console.log("hello")
app.listen("5000", () => {
    console.log("Back end is running")
})
