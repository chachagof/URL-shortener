const mongoose = require('mongoose')
const Schema = mongoose.Schema
const newUrl = new Schema({
  url: {
    type: string,
    required: true
  }
})

module.exports = mongoose.model('newUrl', newUrl)