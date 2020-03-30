// const url = require('url')
const { add } = require('rambdax')

module.exports = async (req, res) => {
  const ok = req.body.password === process.env.FOO
  const result = ok? add(1,2) : 'Not allowed'

  res.status(200).json({ users: result })
}