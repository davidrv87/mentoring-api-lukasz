const express = require('express')
const geoIpRouter = require('./routers/geoIP')
const wheaterRouter = require('./routers/goWheater')
const placeHolder = require('./routers/placeHolder')

const app = express()

// Parse the incoming request into json
app.use(express.json())
app.use(geoIpRouter)
app.use(wheaterRouter)
app.use(placeHolder)

module.exports = app
