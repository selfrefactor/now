const url = require('url')
const { add } = require('rambdax')

module.exports = async (req, res) => {
  res.status(200).json({ users: add(1,2) })
}