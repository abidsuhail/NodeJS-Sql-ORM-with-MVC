const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', require('./routes/ProductRoute'))
app.use('/api', require('./routes/CatRoute'))
app.listen(8080, function () {
  console.log('Server started')
})
