const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const { readBook } = require('./src/read-book')
const REQUEST_PASSWORD = true
var jsonParser = bodyParser.json()

let API_PASSWORD_KEY = process.env.API_PASSWORD_KEY

const dataRoute = async (req, res) => {
  if(!API_PASSWORD_KEY) return res.status(401).json({
    status  : 401,
    message : 'missing key error',
  })
  const bookId = req.params.id;
  const password = req.body.password;
  if(
    password !== API_PASSWORD_KEY &&
    REQUEST_PASSWORD
  ) return res.status(401).json({
    status  : 401,
    message : 'Unauthorized',
  })

  let data = await readBook(bookId)

  res.json({
    status  : 200,
    message : JSON.stringify(
      {data}, null, 2
    ),
  })
}
const secretKeyRoute = async (req, res) => {
  if(!API_PASSWORD_KEY) return res.status(401).json({
    status  : 401,
    message : 'missing key error',
  })
  const secretKeyRouteId = req.params.id;
  const password = req.body.password;
  if(
    password !== API_PASSWORD_KEY &&
    REQUEST_PASSWORD
  ) return res.status(401).json({
    status  : 401,
    message : 'Unauthorized',
  })

  return res.json({
    status  : 200,
    message : JSON.stringify(
      {NEWS_API_KEY: process.env.NEWS_API_KEY, secretKeyRouteId}, null, 2
    ),
  })
}

const options = [
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
];

app.use(options);
app.post('/books/:id', jsonParser, dataRoute)
app.post('/secrets/:id', jsonParser, secretKeyRoute)

app.listen(process.env.PORT || 3000)

module.exports = app
