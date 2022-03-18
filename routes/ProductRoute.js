const express = require('express')
const controller = require('../controllers/ProductController')
const router = express.Router()
//<========================== ROUTES ===============================>
router.get('/getAllProducts', controller.getAllProducts)
router.get('/getAllProductsByCat', controller.getAllProductsByCat)

router.post('/createProduct', controller.createProduct)
router.post('/getProductsByCatId', controller.getProductsByCatId)

//<========================== END ROUTES ===========================>
module.exports = router
