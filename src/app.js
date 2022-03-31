const express = require("express")
const app = express()

app.get("/public/ping", (req, res, next) => {
    res.status(200).json({
        status: "ok"
    })
})

module.exports = app