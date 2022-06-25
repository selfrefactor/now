const data = require('./db.json')

export function omit(propsToOmit, obj){
  const willReturn = {};

  Object.keys(obj).forEach(prop => {
    if (!propsToOmit.includes(prop)){
      willReturn[ prop ] = (obj)[ prop ];
    }
  });

  return willReturn as T;
}


function guestDatabase(input) {
  const filteredRows = input.rows.filter((x) => {
    return x.doc.pcFlag
  })
  const rows = filteredRows.map(x => ({
    ...x,
    doc: {
      ...(omit(['pcFlag', '_rev'],x.doc)),
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
    return res.status(200).json(guestDatabase(data))
  }

  res.status(200).json(data)
}

module.exports = handler
