const express = require('express')
const app = express()
const PORT = process.env.PORT || 13002

app.get('/', function (req, res) {
  res.send('Hello World! update')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
