const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const changeURL = require('./public/javascript/changeURL')
const urlshortener = require('./models/urlshortener')
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

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// main page
app.get('/', (req, res) => {
  res.render('index')
})

// url page
app.post('/urlshortener', (req, res) => {
  const url = req.query.urlshortener
  const newUrl = changeURL(url)
  urlshortener.create({ url: `${url}`, newURL: `${newUrl}` })
    .then(res.render('urlChange', { newUrl }))
    .catch(error => console.log(error))
})

// shortener page
app.get('/')

app.listen(port, () => {
  console.log('Gogogo!!')
})