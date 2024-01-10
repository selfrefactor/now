const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const { readBook } = require('./src/read-book')

var jsonParser = bodyParser.json()

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  if (req.method === 'OPTIONS'){
    res.status(200).end()

    return
  }

  return await fn(req, res)
}


const dataRoute = async (req, res) => {
  const bookId = req.params.id;
  const password = req.body.password;
  const vercelPassword = process.env.API_PASSWORD_KEY || '123456'
  if(
    password !== vercelPassword
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
const dataRoutex = async (req, res) => {
  const bookId = req.params.id;
  let data = await readBook(bookId)

  res.json({
    status  : 200,
    message : JSON.stringify(
      {data}, null, 2
    ),
  })
}

app.get('/books/:id', allowCors(dataRoutex))
app.post('/books/:id', jsonParser, allowCors(dataRoute))

app.listen(process.env.PORT || 3000)

module.exports = app
