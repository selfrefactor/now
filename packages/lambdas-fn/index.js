const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    status  : 200,
    message : 'Get data11 has successfully',
  })
})
app.post('/', (req, res) => {
  res.json({
    status  : 200,
    message : 'Get data33 has successfully',
  })
})

app.listen(process.env.PORT || 3000);

module.exports = app;
