const express = require('express')
const controller = require('../controllers/LoginController')
const router = express.Router()

//<========================== ROUTES ===============================>
router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/getAllUsers', controller.getAllUsers)

//<========================== END ROUTES ===========================>
module.exports = router
