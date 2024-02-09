const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const { readBook } = require('./src/read-book')
const REQUEST_PASSWORD = true
// const REQUEST_PASSWORD = false
var jsonParser = bodyParser.json()

const dataRoute = async (req, res) => {
  const bookId = req.params.id;
  const password = req.body.password;
  const vercelPassword = process.env.API_PASSWORD_KEY || '123456'
  if(
    password !== vercelPassword &&
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

app.listen(process.env.PORT || 3000)

module.exports = app
