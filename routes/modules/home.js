const express = require('express')
const route = express.Router()
const Urlshortener = require('../../models/urlshortener')

// main page
route.get('/', (req, res) => {
  res.render('index')
})

// shortener page
route.get('/:newURL', (req, res) => {
  const { newURL } = req.params
  Urlshortener.findOne({ newURL })
    .then(data => {
      if (!data) {
        return res.render('wrongPage', { newURL })
      }
      return res.redirect(data.url)
    })
    .catch(error => console.log(error))
})

module.exports = route