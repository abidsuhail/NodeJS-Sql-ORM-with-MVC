const express = require('express')
const controller = require('../controllers/PostController')
const router = express.Router()
/* const bearerMiddleware = require('../middlewares/BearerAuthMiddleware')

router.use(bearerMiddleware) */
/* // middleware that is specific to this router
router.use((req, res, next) => {
  console.log('=========================>Time: ', Date.now())
  next()
}) */
//<========================== ROUTES ===============================>
router.get('/getAllPosts', controller.getAllPosts)
router.post('/createPost', controller.createPost)
router.get('/getAllPostsWithUser', controller.getAllPostsWithUser)

//<========================== END ROUTES ===========================>
module.exports = router
