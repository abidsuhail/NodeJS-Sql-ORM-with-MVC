const SERVER_PORT = 8080
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//const bearerMiddleware = require('./middlewares/BearerAuthMiddleware')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//=================ROUTES========================
app.use('/api', require('./routes/ProductRoute'))
app.use('/api', require('./routes/CatRoute'))
app.use('/api', require('./routes/LoginRoute'))
app.use('/api', require('./routes/PostRoute'))
app.use('/api', require('./routes/LikeRoute'))

//=================END ROUTES========================

app.listen(SERVER_PORT, function () {
  console.log(`Server started ${SERVER_PORT} `)
})
