
const mongoose = require('mongoose')
const DistanceRunSchema = require('../Models/DistanceRun').DistanceRunSchema

const DistanceRun = mongoose.model('DistanceRun', DistanceRunSchema)

//TODO: Update the controller before working here