const express = require('express')
const controller = require('../controllers/ProductController')
const router = express.Router()
/* const bearerMiddleware = require('../middlewares/BearerAuthMiddleware')

router.use(bearerMiddleware) */
/* // middleware that is specific to this router
router.use((req, res, next) => {
  console.log('=========================>Time: ', Date.now())
  next()
}) */
//<========================== ROUTES ===============================>
router.get('/getAllProducts', controller.getAllProducts)
router.get('/getAllProductsByCat', controller.getAllProductsByCat)

router.post('/createProduct', controller.createProduct)
router.post('/getProductsByCatId', controller.getProductsByCatId)
//<========================== END ROUTES ===========================>
module.exports = router
