const models = require('../models')

module.exports = {
  sendLike: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      const likeData = await models.Like.findOne({
        where: { postId: req.body.postId, userId: req.user.id }
      })
      if (likeData != null) {
        await models.Like.destroy({
          where: { postId: req.body.postId, userId: req.user.id }
        })
      } else {
        await models.Like.create({
          postId: req.body.postId,
          userId: req.user.id
        })
      }
    } catch (e) {
      message = e.errors.length > 0 ? e.errors[0].message : e.message
      error = 1
    }
    res.send({
      error: error,
      message: message,
      data: data
    })
  },
  getLikes: async (req, res) => {
    let error = 0
    let message = 'success'
    let data = []
    try {
      data = await models.Like.findAll({})
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
      data = await models.Post.findAll({
        where: {
          userId: req.user.id
        },
        include: [{ model: models.Like, required: true, attributes: [] }]
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
