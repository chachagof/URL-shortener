const express = require('express')
const route = express.Router()

const home = require("./modules/home")
const shortneer = require('./modules/shortenerURL')

route.use('/', home)
route.use('/urlshortener', shortneer)

module.exports = route