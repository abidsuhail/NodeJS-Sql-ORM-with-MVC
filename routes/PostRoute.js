const express = require('express')
const controller = require('../controllers/PostController')
const router = express.Router()
const bearerMiddleware = require('../middlewares/BearerAuthMiddleware')

/* // middleware that is specific to this router
router.use((req, res, next) => {
  console.log('=========================>Time: ', Date.now())
  next()
}) */
//<========================== ROUTES ===============================>
router.get('/getAllPosts', bearerMiddleware, controller.getAllPosts)
router.post('/createPost', bearerMiddleware, controller.createPost)
router.get('/getAllPostsWithUser', controller.getAllPostsWithUser)
router.post('/getPostLikes', bearerMiddleware, controller.getPostLikes)

//<========================== END ROUTES ===========================>
module.exports = router
