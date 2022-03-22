const express = require('express')
const controller = require('../controllers/LikeController')
const router = express.Router()
const bearerMiddleware = require('../middlewares/BearerAuthMiddleware')
/* // middleware that is specific to this router
router.use((req, res, next) => {
  console.log('=========================>Time: ', Date.now())
  next()
}) */
//<========================== ROUTES ===============================>
router.post('/sendLike', bearerMiddleware, controller.sendLike)
router.get('/getMyLikesPosts', bearerMiddleware, controller.getMyLikesPosts)
router.get('/getLikes', bearerMiddleware, controller.getLikes)

//<========================== END ROUTES ===========================>
module.exports = router
