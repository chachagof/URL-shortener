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

// url page
app.post('/urlshortener', (req, res) => {
  const url = req.body.urlshortener
  const newUrl = changeURL(url)
  Urlshortener.create({ url: `${url}`, newURL: `${newUrl}` })
    .then(res.render('urlChange', { newUrl }))
    .catch(error => console.log(error))
})

// shortener page
app.get('/gogo/:newUrl', (req, res) => {
  const newUrl = req.params
  Urlshortener.findOne(newUrl)
    .then(data => {
      if (!data) {
        // 11/21繼續錯誤修改
        return res.send('no')
      }
      return res.redirect(data.url)
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log('Gogogo!!')
})