const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const changeURL = require('./public/javascript/changeURL')
const Urlshortener = require('./models/urlshortener')
const app = express()
const port = 3000

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URL)
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb is connecting')
})

app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// main page
app.get('/', (req, res) => {
  res.render('index')
})

// shorten URL
app.post('/urlshortener', (req, res) => {
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

// shortener page
app.get('/:newURL', (req, res) => {
  const { newURL } = req.params
  const newURL1 = req.params
  Urlshortener.findOne({ newURL })
    .then(data => {
      if (!data) {
        return res.render('wrongPage', { newURL })
      }
      return res.redirect(data.url)
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log('Gogogo!!')
})