const express = require('express')
const controller = require('../controllers/LoginController')
const router = express.Router()
//<========================== ROUTES ===============================>
router.post('/login', controller.login)
router.post('/register', controller.register)

//<========================== END ROUTES ===========================>
module.exports = router
