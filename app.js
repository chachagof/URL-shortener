const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const routes = require('./routes/index')
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

app.use(express.urlencoded({ extended: true }), routes)
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')





app.listen(port, () => {
  console.log('Gogogo!!')
})