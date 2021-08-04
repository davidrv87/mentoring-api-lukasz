const express = require('express')
const geoIpRouter = require('./routers/geoIP')

const app = express()

// Parse the incoming request into json
app.use(express.json())
app.use(geoIpRouter)

module.exports = app
