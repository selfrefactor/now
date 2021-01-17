const data = require('./db.json')
 
module.exports = async (req, res) => {
  const ok = req.body.password === process.env.password
  if(!ok) res.status(200).send('Incorrect password')

  res.status(200).json(data)
}