const express = require('express')
const route = express.Router()
const Urlshortener = require('../../models/urlshortener')
const changeURL = require('../../public/javascript/changeURL')

// shorten URL
route.post('/', (req, res) => {
  const url = req.body.urlshortener
  if (!url) {
    return res.redirect('/')
  }
  Urlshortener.findOne({ "url": url })
    .then(data => {
      if (!data) {
        const newUrl = changeURL(url)
        Urlshortener.create({ url: `${url}`, newURL: `${newUrl}` })
          .then(res.render('urlChange', { newUrl }))
          .catch(error => console.log(error))
      }
      // 輸入相同網址時，產生一樣的縮址。
      return res.render('urlChange', { newUrl: data.newURL })
    })
    .catch(error => console.log(error))
})

module.exports = route