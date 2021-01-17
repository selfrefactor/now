const data = require('./db.json')

const handler = (req, res) => {
  const fallback = () => res.status(200).json({rows:[], auth: 'incorrect password'})

  if(!req.body) return fallback()
  if(!req.body.password) return fallback()
  if(req.body.password !== process.env.password) return fallback()

  res.status(200).json(data)
}

module.exports = handler
