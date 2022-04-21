const data = require('./db.json')

function noImages(input) {
  const rows = input.rows.map(x => ({
    ...x,
    doc: {
      ...x.doc,
      imageSrc: null,
      imageSrcOrigin: null,
    },
  }))

  return {rows}
}

const handler = (req, res) => {
  if (
    !req.body ||
    !req.body.password ||
    req.body.password !== process.env.password
  ) {
    return res.status(200).json(noImages(data))
  }

  res.status(200).json(data)
}

module.exports = handler
