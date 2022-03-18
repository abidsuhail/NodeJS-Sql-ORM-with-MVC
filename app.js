const express = require('express')
const bodyParser = require('body-parser')
const bearerAuthMiddleware = require('./middlewares/BearerAuthMiddleware')
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//=================ROUTES========================
app.use('/api', bearerAuthMiddleware, require('./routes/ProductRoute'))
app.use('/api', require('./routes/CatRoute'))
app.use('/api', require('./routes/LoginRoute'))
//=================END ROUTES========================

app.listen(8080, function () {
  console.log('Server started')
})
