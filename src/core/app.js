const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const keys = require('./config/config')
const routes = require('./routes/routes').routes

const app = express()
app.use(bodyParser.json())

mongoose.connect(
  `mongodb://${keys.username}:${keys.password}@ds119064.mlab.com:19064/running-log`,
  { useNewUrlParser: true}
)

routes(app)

module.exports = {
  app
}