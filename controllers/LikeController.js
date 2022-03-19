const models = require('../models')

module.exports = {
  sendLike: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      await models.likes.create({
        postId: req.body.postId,
        userId: req.user.id
      })
    } catch (e) {
      message = e.message
      error = 1
    }
    res.send({
      error: error,
      message: message,
      data: data
    })
  },
  getMyLikesPosts: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      data = await models.posts.findAll({
        include: [
          {
            model: models.likes,
            required: true,
            where: { userId: req.user.id }
            /* attributes: [] */
          }
        ]
      })
    } catch (e) {
      message = e.message
      error = 1
    }
    res.send({
      error: error,
      message: message,
      data: data
    })
  },
  getLikesByUser: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      data = await models.likes.findAll({
        include: [
          { model: models.posts },
          { model: models.users, attributes: { exclude: ['password'] } }
        ]
      })
    } catch (e) {
      message = e.message
      error = 1
    }
    res.send({
      error: error,
      message: message,
      data: data
    })
  }
}
