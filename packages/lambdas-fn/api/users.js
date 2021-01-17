// const url = require('url')
const { add } = require('rambdax')

module.exports = async (req, res) => {
  const ok = req.body.password === process.env.password
  const result = ok? add(1,22) : 'Not allowed 2'

  res.status(200).json({ users: result })
}