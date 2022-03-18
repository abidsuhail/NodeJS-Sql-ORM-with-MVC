const express = require('express')
const controller = require('../controllers/CatController')
const router = express.Router()
//<========================== ROUTES ===============================>
router.post('/createCat', controller.createCat)
router.get('/getAllCats', controller.getAllCats)
//<========================== END ROUTES ===========================>
module.exports = router
