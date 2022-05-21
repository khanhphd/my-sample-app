const express = require("express")
const app = express()

app.get("/public/ping", (req, res, next) => {
    res.status(200).json({
        status: "ok"
    })
})

app.get("/hello", (req, res, next) => {
    res.status(200).json({
        message: "Hello"
    })
})

app.get("/", (req, res, next) => {
    res.status(404).json({
        message: "Not Found"
    })
})


module.exports = app