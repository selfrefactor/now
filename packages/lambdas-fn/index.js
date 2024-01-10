const express = require('express')
const app = express()
// const data = require('./src/db.json')

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

const dataRoute = (req, res) => {
  const bookId = req.params.id;
  res.json({
    status  : 200,
    message : JSON.stringify(
      {data: {bookId}}, null, 2
    ),
  })
}
const dataRoutex = (req, res) => {
  const bookId = req.params.id;
  res.json({
    status  : 200,
    message : JSON.stringify(
      {data: {bookId, extra:1}}, null, 2
    ),
  })
}
// const fn = (req, res) => {
//   res.json({
//     status  : 200,
//     message : JSON.stringify(
//       data, null, 2
//     ),
//   })
// }
// app.get('/', allowCors(fn))
app.get('/books/:id', allowCors(dataRoute))
app.post('/books/:id', allowCors(dataRoutex))

app.listen(process.env.PORT || 3000)

module.exports = app
