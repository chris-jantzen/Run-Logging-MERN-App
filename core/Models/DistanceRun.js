const Schema = require('mongoose').Schema

const DistanceRunSchema = new Schema({
  distance: {
    type: String,
    required: 'Enter a distance'
  },
  time: {
    type: String,
    required: 'Enter a total time'
  },
  pace: {
    type: String
  }
})

module.exports = {
  DistanceRunSchema
}