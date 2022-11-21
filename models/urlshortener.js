const mongoose = require('mongoose')
const Schema = mongoose.Schema
const newUrl = new Schema({
  url: {
    type: String,
    required: true
  },
  newURL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('newUrl', newUrl)