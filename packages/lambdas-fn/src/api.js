const express = require('express')
const router = express.Router()
// const data = require('./db.json')

// function omit(propsToOmit, obj){
//   const willReturn = {};

//   Object.keys(obj).forEach(prop => {
//     if (!propsToOmit.includes(prop)){
//       willReturn[ prop ] = (obj)[ prop ];
//     }
//   });

//   return willReturn;
// }

// function guestDatabase(input) {
//   const filteredRows = input.rows.filter((x) => {
//     return x.doc.pcFlag
//   })
//   const rows = filteredRows.map(x => ({
//     ...x,
//     doc: {
//       ...(omit(['pcFlag', '_rev'],x.doc)),
//       imageSrc: null,
//       imageSrcOrigin: null,
//     },
//   }))

//   return {rows}
// }

// const handler = (req, res) => {
//   if (request.method === 'OPTIONS') {
//     return response.status(200).send('ok');
//   }
//   if (
//     !req.body.password ||
//     req.body.password !== process.env.password
//   ) {
//     return res.status(200).json(guestDatabase(data))
//   }

//   res.status(200).json(data)
// }

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get('/', async (req, res) => {
  try {
    res.json({
      status  : 200,
      message : 'Get data has successfully',
    })
  } catch (error){
    console.error(error)

    return res.status(500).send('Server error')
  }
})
router.post('/', async (req, res) => {
  try {
    res.json({
      status  : 200,
      message : 'Get ssdata has successfully',
    })
  } catch (error){
    console.error(error)

    return res.status(500).send('Server error')
  }
})

module.exports = router

// module.exports = allowCors(handler)
